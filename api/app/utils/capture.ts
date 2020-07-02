import {  Request, Response, NextFunction } from "../../deps.ts";

export const capture = (mafunction: Function) : Function => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await mafunction(req, res, next);
    } catch (error) {
      console.trace(error);
      res.status(500).send({
        message: error.message,
        details: error
      });
    };
  };
};