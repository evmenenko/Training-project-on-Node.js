const Joi = require('@hapi/joi');

let displaySchema = {
  startDate: Joi.date().required(),
  endDate: Joi.date().required(),
  movieId: Joi.number().required(),
};

module.exports = {
  displaySchema,
}