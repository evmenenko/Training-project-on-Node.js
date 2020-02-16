const Joi = require('@hapi/joi');

let idSchema = {
  id: Joi.number().required(),
};

let tagSchema = {
  name: Joi.string().required(),
};

module.exports = {
  idSchema,
  tagSchema,
}