import { Schema } from "mongoose";
import { NextFunction } from "express";
import { compareSync, genSaltSync, hashSync } from "bcrypt";
import { validateEmail } from "../common/validateEmail";
import { validatePassword } from "../common/validatePassword";
import { uniqueEmail } from "../common/uniqueEmail";

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    validate: [
      {validator: validateEmail, message: 'Email is not valid'},
      {validator: uniqueEmail, message: 'Email is already taken'}
    ],
  },
  password: {
    type: String,
    required: true,
    validate: [validatePassword, 'Password is not strong enough']
  },
  created: {
    type: Date,
    default: Date.now()
  }
});

UserSchema.pre('save', function (this: any, next: NextFunction) {
  if (!this.isModified('password')) {
    return next();
  }

  const salt = genSaltSync(10);
  this.password = hashSync(this.password, salt);

  next();
});

UserSchema.methods.comparePassword = function (candidatePassword: string, hash: string) {
  return compareSync(candidatePassword, hash);
};

export { UserSchema };
