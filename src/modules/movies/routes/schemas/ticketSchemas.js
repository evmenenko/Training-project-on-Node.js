const Joi = require('@hapi/joi');

let cancelTicket = {
  id: Joi.number().required(),
};

let orderTicket = {
  displayId: Joi.number().required(),
};

let getByUserId = {
  page: Joi.number().optional(),
  amount: Joi.number().optional(),
  userId: Joi.number().optional(),
};

let getByMovieId = {
  page: Joi.number().optional(),
  amount: Joi.number().optional(),
  id: Joi.number().required(),
};

let getById = {
  id: Joi.number().required(),
};

let getAll = {
  page: Joi.number().optional(),
  amount: Joi.number().optional(),
};

module.exports = {
  cancelTicket,
  orderTicket,
  getByUserId,
  getByMovieId,
  getById,
  getAll,
}