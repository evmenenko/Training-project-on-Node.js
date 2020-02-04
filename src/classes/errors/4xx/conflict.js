const errorsInfo = require('../../../constants/errorsInfo');

/**
 * The request could not be completed due to conflicting access to the resource.
 */
module.exports = class Conflict extends Error {
    
    constructor(message = errorsInfo['4xx'].conflict.message) {
        super(message);
        super.name = errorsInfo['4xx'].conflict.name;
        this.status = 409;
    }
}