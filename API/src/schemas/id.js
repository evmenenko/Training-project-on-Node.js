const Joi = require('@hapi/joi');

module.exports = {
  id: Joi.number().required(),
};