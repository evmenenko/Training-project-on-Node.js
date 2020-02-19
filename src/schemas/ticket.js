const Joi = require('@hapi/joi');

let displayIdSchema = {
  displayId: Joi.number().required(),
};

let userIdSchema = {
  userId: Joi.number().optional(),
};

module.exports = {
  displayIdSchema,
  userIdSchema,
}