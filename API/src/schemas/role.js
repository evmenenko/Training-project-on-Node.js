const Joi = require('@hapi/joi');

let roleSchema = {
  name: Joi.string().required(),
};

module.exports = {
  roleSchema,
}