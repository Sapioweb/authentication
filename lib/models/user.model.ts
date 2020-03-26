import { model } from 'mongoose';
import { UserSchema } from "../schemas";
import { IUserModel } from "../interfaces";

export const User = model<IUserModel>('User', UserSchema);
