const Joi = require('@hapi/joi');

let idSchema = {
  id: Joi.number().required(),
};

module.exports = {
  idSchema,
}