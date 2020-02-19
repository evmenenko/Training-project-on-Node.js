const Joi = require('@hapi/joi');

let tagSchema = {
  name: Joi.string().required(),
};

module.exports = {
  tagSchema,
}