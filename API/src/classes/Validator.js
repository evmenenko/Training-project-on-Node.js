const Joi = require('@hapi/joi');

class Validator {

  validate({ params, query, body } = {}) {

    let paramsSchema = {};
    if (params) {
      if (Array.isArray(params)) {
        for (let subschema of params) {
          Object.assign(paramsSchema, subschema);
        }
      }
      else {
        paramsSchema = params;
      }
    }

    let querySchema = {};
    if (query) {
      if (Array.isArray(query)) {
        for (let subschema of query) {
          Object.assign(querySchema, subschema);
        }
      }
      else {
        querySchema = query;
      }
    }

    let bodySchema = {};
    if (body) {
      if (Array.isArray(body)) {
        for (let subschema of body) {
          Object.assign(bodySchema, subschema);
        }
      }
      else {
        bodySchema = body;
      }
    }

    return async (ctx, next) => {

      if (params) {
        await Joi.object(paramsSchema).validateAsync(ctx.params);
      }

      if (query) {
        await Joi.object(querySchema).validateAsync(ctx.query);
      }
	  
      if (body) {
        if (!ctx.request.body) {
          ctx.request.body = {};
          Object.assign(ctx.request.body, ctx.req.body)
        }
        await Joi.object(bodySchema).validateAsync(ctx.request.body);
      }

      await next();
    }
  }
}

module.exports = new Validator();