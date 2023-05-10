import Joi, { Schema } from 'joi';

const createUserSchema: Schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export default createUserSchema;