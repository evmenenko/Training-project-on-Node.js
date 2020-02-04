const errorsInfo = require('../../../constants/errorsInfo');

/**
 * It is returned by the server if there is insufficient information from the client to process the request.
 */
module.exports = class RetryWith extends Error {
    
    constructor(message = errorsInfo['4xx'].retryWith.message) {
        super(message);
        super.name = errorsInfo['4xx'].retryWith.name;
        this.status = 449;
    }
}