import { NextFunction, Request, Response } from "express";
import { User } from '../models';
import { sign } from "jsonwebtoken";

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!process.env.JWT_SECRET) {
      return next(new Error('JWT_SECRET environment variable missing'));
    }

    const {email, password} = req.body || {};

    const user = await User.findOne({email});

    if (!user || !password) {
      return next(new Error('Invalid login'));
    }

    const passwordMatch = user.comparePassword(password, user.password);

    if (!passwordMatch) {
      return next(new Error('Incorrect password'));
    }

    const token = sign(user.toJSON(), process.env.JWT_SECRET);

    return res.json({
      success: true,
      token,
      user
    });
  } catch (e) {
    return next(e);
  }
};

export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {email, password} = req.body || {};

    if (!email || !password) {
      return next(new Error('Email and Password are required'));
    }

    const user = new User({
      email,
      password
    });

    await user.save();

    return res.json({
      success: true,
      user
    });
  } catch (e) {
    return next(e);
  }
};
