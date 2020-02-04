const errorsInfo = require('../../../constants/errorsInfo');

/**
 * Any internal server error that is not part of the rest of the class errors.
 */
module.exports = class InternalServerError extends Error {
    
    constructor(message = errorsInfo['5xx'].internalServerError.message) {
        super(message);
        super.name = errorsInfo['5xx'].internalServerError.name;
        this.status = 500;
    }
}