const schemas = require('../schemas/displaySchemas');

const validateId = async (ctx, next) => {

  await Joi.object(schemas.idSchema)
    .validateAsync({
      id: ctx.params.id,
    });

  await next();

}

const validateUpdatedDisplay = async (ctx, next) => {

  await Joi.object(schemas.idSchema)
    .validateAsync({
      id: ctx.params.id,
    });

  await Joi.object(schemas.displaySchema)
    .validateAsync({
      startDate: ctx.request.body.startDate,
      endDate: ctx.request.body.endDate,
      movieId: ctx.request.body.movieId,
    });

  await next();

}

const validateCreatedDisplay = async (ctx, next) => {

  await Joi.object(schemas.displaySchema)
    .validateAsync({
      startDate: ctx.request.body.startDate,
      endDate: ctx.request.body.endDate,
      movieId: ctx.request.body.movieId,
    });

  await next();

}

module.exports = {
  validateId,
  validateUpdatedDisplay,
  validateCreatedDisplay,
}