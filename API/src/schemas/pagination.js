const Joi = require('@hapi/joi');

module.exports = {
  page: Joi.number().optional(),
  amount: Joi.number().optional(),
};