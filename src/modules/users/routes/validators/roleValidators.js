const schemas = require('../schemas/roleSchemas');

const validateName =  async (ctx, next) => {

  await Joi.object(schemas.nameSchema)
    .validateAsync({
      name: ctx.request.body.name,
    });

  await next();

}

const validateId = async (ctx, next) => {

  await Joi.object(schemas.idSchema)
    .validateAsync({
      id: ctx.params.id,
    });

  await next();

}

const validateUpdatedRole = async (ctx, next) => {

  await Joi.object(schemas.idSchema)
    .validateAsync({
      id: ctx.params.id,
    });

  await Joi.object(schemas.nameSchema)
    .validateAsync({
      name: ctx.request.body.name,
    });

  await next();

}

module.exports = {
  validateName,
  validateId,
  validateUpdatedRole,
}