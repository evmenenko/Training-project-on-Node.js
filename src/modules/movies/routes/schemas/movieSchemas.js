const Joi = require('@hapi/joi');

let searchByTags = {
  page: Joi.number().optional(),
  amount: Joi.number().optional(),
  tagIds: [
    Joi.number().required(),
    Joi
      .array()
      .items(Joi.number())
      .required(),
  ],
};

let getById = {
  id: Joi.number().required(),
};

let update = {
  id: Joi.number().required(),
  name: Joi.string().required(),
  previewUrl: Joi.string().uri().required(),
  description: Joi.string().optional(),
  tagNames: [
    Joi.string().required(),
    Joi
      .array()
      .items(Joi.string())
      .required(),
  ],
};

let deleteById = {
  id: Joi.number().required(),
};

let getAll = {
  page: Joi.number().optional(),
  amount: Joi.number().optional(),
};

let create = {
  name: Joi.string().required(),
  previewUrl: Joi.string().uri().required(),
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
  searchByTags,
  getById,
  update,
  deleteById,
  getAll,
  create,
}