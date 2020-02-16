const schemas = require('../schemas/requestSchemas');

const validateId = async (ctx, next) => {

  await Joi.object(schemas.idSchema)
    .validateAsync({
      id: ctx.params.id,
    });

  await next();

}

module.exports = {
  validateId,
}