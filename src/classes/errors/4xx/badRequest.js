const errorsInfo = require('../../../constants/errorsInfo');

/**
 * It is returned by the server if a syntax error is detected in a client request.
 */
module.exports = class BadRequest extends Error {
  
  constructor(message = errorsInfo['4xx'].badRequest.message) {
    super(message);
    super.name = errorsInfo['4xx'].badRequest.name;
    this.status = 400;
  }
}