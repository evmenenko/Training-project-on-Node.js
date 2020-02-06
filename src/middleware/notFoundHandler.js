const ResponseFormat = require('../helpers/ResponseFormat');
const errorsInfo = require('../constants/errorsInfo');

module.exports = async (ctx, next) => {

  ctx.status = 404;
  ctx.body = ResponseFormat
    .error(
      {
        name: errorsInfo.ERR_404_NAME,
      },
      'Route not found, incorrect request URL',
      404,
      'failed'
    );
}