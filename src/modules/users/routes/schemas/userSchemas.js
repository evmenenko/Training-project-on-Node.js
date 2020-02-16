const Joi = require('@hapi/joi');

let idSchema = {
  id: Joi.number().required(),
};

let nameSchema = {
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
};

let changePasswordSchema = {
  oldPassword: Joi.string().required(),
  newPassword: Joi.string().required(),
};

let userSchema = {
  login: Joi.string().required(),
  password: Joi.string().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().required(),
};

let rolesSchema = {
  roleIds: Joi.array().items(
    Joi.number()
  ),
};

module.exports = {
  idSchema,
  nameSchema,
  userSchema,
  rolesSchema,
  changePasswordSchema,
}