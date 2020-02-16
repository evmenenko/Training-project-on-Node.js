const Joi = require('@hapi/joi');

let idSchema = {
  id: Joi.number().required(),
};

let movieSchema = {
  name: Joi.string().required(),
  previewUrl: Joi.string().uri().required(),
  description: Joi.string().optional(),
};

let tagNamesSchema = {
  tagNames: Joi.array().items(
    Joi.string()
  ).required(),
};

let tagIdsSchema = {
  tagIds: Joi.array().items(
    Joi.number()
  ).required(),
};

module.exports = {
  idSchema,
  movieSchema,
  tagNamesSchema,
  tagIdsSchema,
}