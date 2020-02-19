const Joi = require('@hapi/joi');

let getById = {
  id: Joi.number().required(),
};

let update = {
  id: Joi.number().required(),
  name: Joi.string().required(),
};

let deleteById = {
  id: Joi.number().required(),
};

let create = {
  name: Joi.string().required(),
};

module.exports = {
  getById,
  update,
  deleteById,
  create,
}