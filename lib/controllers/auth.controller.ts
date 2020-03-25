import { NextFunction, Request, Response } from "express";
// import { User } from '../models/user.model';

// const JSON_SECRET = 'beasleybeasley';

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req.body)
    const {email = undefined, password = undefined} = req.body || {};

    // const user = await User.findOne({ email });

    // if (!user) {
    //   return next(new Error('Invalid login'));
    // }

    // const passwordMatch = user.comparePassword(password, user.password);

    // if (!passwordMatch) {
    //   return next(new Error('Incorrect password'));
    // }

    // const token = sign(user.toJSON(), JSON_SECRET);

    return res.json({
      success: true,
      // token,
      // user
    });
  } catch (e) {
    return next(e);
  }
};

export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {email = undefined, password = undefined} = req.body;

    // Create user
    // const user = new User({
    //   email,
    //   password
    // });

    // await user.save();

    return res.json({
      success: true,
      // user
    });
  } catch (e) {
    return next(e);
  }
};
