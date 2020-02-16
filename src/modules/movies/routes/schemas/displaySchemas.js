const Joi = require('@hapi/joi');

let idSchema = {
  id: Joi.number().required(),
};

let displaySchema = {
  startDate: Joi.date().required(),
  endDate: Joi.date().required(),
  movieId: Joi.number().required(),
};

module.exports = {
  idSchema,
  displaySchema,
}