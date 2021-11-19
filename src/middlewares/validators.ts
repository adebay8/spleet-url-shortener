import { Response, Request, NextFunction } from "express";
import joi from "joi";
import { IData } from "../types/address.types";

class Validators {
  public url(req: Request, res: Response, next: NextFunction) {
    const schema = joi.object({
      url: joi.string().required(),
    });

    const validation = schema.validate({
      ...req.body,
    });

    if (validation.error) {
      return res.status(400).json({
        success: false,
        error: validation.error.details[0].message,
      });
    }

    next();
  }
}

export const validators = new Validators();
