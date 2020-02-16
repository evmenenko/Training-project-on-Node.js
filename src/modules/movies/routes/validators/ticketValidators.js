const schemas = require('../schemas/ticketSchemas');

const verifyId = async (id) => {
  await Joi.object(schemas.idSchema).validateAsync({ id });
}

const validateId = async (ctx, next) => {
  await verifyId(ctx.params.id);
  await next();
}

const validateCreatedOrder = async (ctx, next) => {
  await verifyId(ctx.request.body.displayId);
  await next();
}

const validateUserId = async (ctx, next) => {
  await verifyId(ctx.state.id);
  await next();
}

module.exports = {
  validateId,
  validateUserId,
  validateCreatedOrder,
}