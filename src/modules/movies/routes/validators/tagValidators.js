const schemas = require('../schemas/tagSchemas');

const validateId = async (ctx, next) => {

  await Joi.object(schemas.idSchema)
    .validateAsync({
      id: ctx.params.id,
    });

  await next();

}

const validateUpdatedTag = async (ctx, next) => {

  await Joi.object(schemas.idSchema)
    .validateAsync({
      id: ctx.params.id,
    });
    
  await Joi.object(schemas.tagSchema)
    .validateAsync({
      name: ctx.request.body.name,
    });

  await next();

}

const validateCreatedTag = async (ctx, next) => {
    
  await Joi.object(schemas.tagSchema)
    .validateAsync({
      name: ctx.request.body.name,
    });

  await next();

}

module.exports = {
  validateId,
  validateUpdatedTag,
  validateCreatedTag,
}