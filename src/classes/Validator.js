const Joi = require('@hapi/joi');

class Validator {

    validate(schema) {

        return async (ctx, next) => {

          const object = {};
          Object.assign(object, ctx.params, ctx.query, ctx.request.body);

          await Joi.object(schema).validateAsync(object);

          await next();
        }
    }
}

module.exports = new Validator();