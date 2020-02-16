const schemas = require('../schemas/movieSchemas');

const validateId = async (ctx, next) => {

  await Joi.object(schemas.idSchema)
    .validateAsync({
      id: ctx.params.id,
    });

  await next();

}

const validateTagIds = async (ctx, next) => {

  let tagIds = ctx.query.tagIds;
  if (!Array.isArray(tagIds)) {
    tagIds = [ tagIds ];
  }

  await Joi.object(schemas.tagIdsSchema)
    .validateAsync({
      tagIds,
    });

  await next();

}

const validateUpdatedMovie = async (ctx, next) => {

  await Joi.object(schemas.idSchema)
    .validateAsync({
      id: ctx.params.id,
    });

  await Joi.object(schemas.movieSchema)
    .validateAsync({
      name: ctx.request.body.name,
      previewUrl: ctx.request.body.previewUrl,
      description: ctx.request.body.description,
    });

  await Joi.object(schemas.tagNamesSchema)
    .validateAsync({
      tagNames: ctx.request.body.tagNames,
    });

  await next();

}

const validateCreatedMovie = async (ctx, next) => {

  await Joi.object(schemas.movieSchema)
    .validateAsync({
      name: ctx.request.body.name,
      previewUrl: ctx.request.body.previewUrl,
      description: ctx.request.body.description,
    });

  await Joi.object(schemas.tagNamesSchema)
    .validateAsync({
      tagNames: ctx.request.body.tagNames,
    });

  await next();

}

module.exports = {
  validateId,
  validateTagIds,
  validateUpdatedMovie,
  validateCreatedMovie,
}