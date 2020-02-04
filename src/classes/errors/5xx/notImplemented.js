const errorsInfo = require('../../../constants/errorsInfo');

/**
 * The server does not support the capabilities required to process the request.
 * For example, the server does not understand the method specified in the request.
 */
module.exports = class NotImplemented extends Error {
    
    constructor(message = errorsInfo['5xx'].notImplemented.message) {
        super(message);
        super.name = errorsInfo['5xx'].notImplemented.name;
        this.status = 501;
    }
}