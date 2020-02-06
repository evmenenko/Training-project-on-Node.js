const ResponseFormat = require('../helpers/ResponseFormat');
const errorsInfo = require('../constants/errorsInfo');

module.exports = async (ctx, next) => {
  
  try {

    await next();
    
  } catch (err) {

    switch (err.name) {
      case errorsInfo.ERR_400_NAME:
      case errorsInfo.ERR_401_NAME:
      case errorsInfo.ERR_404_NAME:
      case errorsInfo.ERR_409_NAME:
      case errorsInfo.ERR_410_NAME:
      case errorsInfo.ERR_422_NAME:
      case errorsInfo.ERR_449_NAME:
      case errorsInfo.ERR_500_NAME:
      case errorsInfo.ERR_501_NAME:
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