const ResponseFormat = require('../helpers/ResponseFormat');
const errorsInfo = require('../constants/errorsInfo');

module.exports = async (ctx, next) => {
  
  try {

    await next();
    
  } catch (err) {

    switch (err.name) {
      case errorsInfo['4xx'].badRequest.name:
      case errorsInfo['4xx'].conflict.name:
      case errorsInfo['4xx'].gone.name:
      case errorsInfo['4xx'].notFound.name:
      case errorsInfo['4xx'].retryWith.name:
      case errorsInfo['4xx'].unauthorized.name:
      case errorsInfo['4xx'].unprocessableEntity.name:
      case errorsInfo['5xx'].internalServerError.name:
      case errorsInfo['5xx'].notImplemented.name:
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