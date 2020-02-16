const schemas = require('../schemas/userSchemas');

const validateName =  async (ctx, next) => {

  await Joi.object(schemas.nameSchema)
    .validateAsync({
      firstName: ctx.request.body.firstName,
      lastName: ctx.request.body.lastName,
    });

  await next();

}

const validatePasswords = async (ctx, next) => {

  await Joi.object(schemas.changePasswordSchema)
    .validateAsync({
      oldPassword: ctx.request.body.oldPassword,
      newPassword: ctx.request.body.newPassword,
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

const validateUpdatedUser = async (ctx, next) => {

  await Joi.object(schemas.idSchema)
    .validateAsync({
      id: ctx.params.id,
    });
    
  await Joi.object(schemas.userSchema)
    .validateAsync({
      login: ctx.request.body.login,
      password: ctx.request.body.password,
      firstName: ctx.request.body.firstName,
      lastName: ctx.request.body.lastName,
      email: ctx.request.body.email,
    });
    
  await Joi.object(schemas.rolesSchema)
    .validateAsync({
      roleIds: ctx.request.body.roleIds,
    });

  await next();

}

const validateCreatedUser = async (ctx, next) => {

  await Joi.object(schemas.userSchema)
    .validateAsync({
      login: ctx.request.body.login,
      password: ctx.request.body.password,
      firstName: ctx.request.body.firstName,
      lastName: ctx.request.body.lastName,
      email: ctx.request.body.email,
    });
    
  await Joi.object(schemas.rolesSchema)
    .validateAsync({
      roleIds: ctx.request.body.roleIds,
    });

  await next();

}

module.exports = {
  validateName,
  validatePasswords,
  validateId,
  validateUpdatedUser,
  validateCreatedUser,
}