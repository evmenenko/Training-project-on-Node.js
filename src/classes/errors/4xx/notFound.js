const errorsInfo = require('../../../constants/errorsInfo');

/**
 * It is returned by the server if requested resource is not found at the specified URL.
 */
module.exports = class NotFound extends Error {
    
    constructor(message = errorsInfo['4xx'].notFound.message) {
        super(message);
        super.name = errorsInfo['4xx'].notFound.name;
        this.status = 404;
    }
}