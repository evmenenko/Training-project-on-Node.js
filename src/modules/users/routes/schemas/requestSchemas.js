const Joi = require('@hapi/joi');

let getById = {
  id: Joi.number().required(),
};

module.exports = {
  getById,
}