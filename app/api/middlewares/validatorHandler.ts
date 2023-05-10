import { Request, Response, NextFunction } from 'express';
import { Schema } from 'joi';

const validationHandler = (schema:Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const options = {
      errors: {
        wrap: {
          label: '',
        },
      },
    };
    const { error, value } = schema.validate(req.body, options);
    if (!error) {
      req.body = value;
      next();
    } else {
      const message = error.details[0].message;
      return res.status(400).json({success:false, message: message});
    }
  };
};

export default validationHandler;
