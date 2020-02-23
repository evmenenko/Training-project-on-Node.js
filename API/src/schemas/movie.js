const Joi = require('@hapi/joi');

let tagIdsSchema = {
  tagIds: [
    Joi.number().required(),
    Joi
      .array()
      .items(Joi.number())
      .required(),
  ],
};

let movieSchema = {
  name: Joi.string().required(),
  description: Joi.string().optional(),
  tagNames: [
    Joi.string().required(),
    Joi
      .array()
      .items(Joi.string())
      .required(),
  ],
};

module.exports = {
  tagIdsSchema,
  movieSchema,
}