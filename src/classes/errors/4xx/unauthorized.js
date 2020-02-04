const errorsInfo = require('../../../constants/errorsInfo');

/**
 * It is returned by the server if authentication is required to access the requested resource.
 */
module.exports = class Unauthorized extends Error {
    
    constructor(message = errorsInfo['4xx'].unauthorized.message) {
        super(message);
        super.name = errorsInfo['4xx'].unauthorized.name;
        this.status = 401;
    }
}