import { NextFunction, Request, Response } from "express";
export declare const login: (req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response<any>, next: NextFunction) => Promise<void | Response<any>>;
export declare const register: (req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response<any>, next: NextFunction) => Promise<void | Response<any>>;
