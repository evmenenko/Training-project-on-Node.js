const Joi = require('@hapi/joi');

let changeName = {
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
};

let getByName = {
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  page: Joi.number().optional(),
  amount: Joi.number().optional(),
};

let changePassword = {
  oldPassword: Joi.string().required(),
  newPassword: Joi.string().required(),
  repeatedNewPassword: Joi.string().required(),
};

let getById = {
  id: Joi.number().required(),
};

let update = {
  id: Joi.number().required(),
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

let deleteById = {
  id: Joi.number().required(),
};

let getAll = {
  page: Joi.number().optional(),
  amount: Joi.number().optional(),
};

let create = {
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
  email: Joi.string().email().required(),
};

let rolesSchema = {
  roleIds: Joi.array().items(
    Joi.number()
  ),
};

module.exports = {
  changeName,
  getByName,
  changePassword,
  getById,
  update,
  deleteById,
  getAll,
  create,
}