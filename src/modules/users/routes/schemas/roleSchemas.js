const Joi = require('@hapi/joi');

let idSchema = {
  id: Joi.number().required(),
};

let nameSchema = {
  name: Joi.string().required(),
};

module.exports = {
  idSchema,
  nameSchema,
}