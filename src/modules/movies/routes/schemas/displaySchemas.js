const Joi = require('@hapi/joi');

let getById = {
  id: Joi.number().required(),
};

let update = {
  id: Joi.number().required(),
  startDate: Joi.date().required(),
  endDate: Joi.date().required(),
  movieId: Joi.number().required(),
};

let deleteById = {
  id: Joi.number().required(),
};

let create = {
  startDate: Joi.date().required(),
  endDate: Joi.date().required(),
  movieId: Joi.number().required(),
};

let getAll = {
  page: Joi.number().optional(),
  amount: Joi.number().optional(),
};

module.exports = {
  getById,
  update,
  deleteById,
  create,
  getAll,
}