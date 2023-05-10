import Joi, { Schema } from 'joi';

const createTaskSchema: Schema = Joi.object({
  name: Joi.string().required(),
});

export default createTaskSchema;