const Joi = require('@hapi/joi');

let login = {
  password: Joi.string().required(),
  email: Joi.string().email().required(),
};

let register = {
  login: Joi.string().required(),
  password: Joi.string().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
};

module.exports = {
  login,
  register,
}