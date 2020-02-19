const Joi = require('@hapi/joi');

let nameSchema = {
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
};

let passwordsSchema = {
  oldPassword: Joi.string().required(),
  newPassword: Joi.string().required(),
  repeatedNewPassword: Joi.string().required(),
};

let userSchema = {
  login: Joi.string().required(),
  password: Joi.string().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  roleIds: [
    Joi.number().required(),
    Joi
      .array()
      .items(Joi.number())
      .required(),
  ],
};

module.exports = {
  nameSchema,
  passwordsSchema,
  userSchema,
}