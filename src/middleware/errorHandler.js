const ResponseFormat = require('../helpers/ResponseFormat');

module.exports = async function(ctx, next) {
  
  try {

    await next();
    
  } catch (err) {

    switch (err.name) {
      case 'BadRequest':
      case 'Conflict':
      case 'Gone':
      case 'NotFound':
      case 'RetryWith':
      case 'Unauthorized':
      case 'UnprocessableEntity':
      case 'InternalServerError':
      case 'NotImplemented':
        ctx.status = err.status;
        ctx.body = ResponseFormat
          .error(
            {
              name: err.name,
            },
            err.message,
            err.status,
            'failed'
          );
        break;
      default:
        ctx.status = 500;
        ctx.body = ResponseFormat
          .error(
            {
              name: err.name,
              stack: err.stack,
            },
            'unexpected error',
            500,
            'failed'
          );
    }
  }
}