const ResponseFormat = require('../helpers/ResponseFormat');

module.exports = async function(ctx, next) {

  ctx.status = 404;
  ctx.body = ResponseFormat
    .error(
      {
        name: 'NotFound',
      },
      'Route not found, incorrect request URL',
      404,
      'failed'
    );
}