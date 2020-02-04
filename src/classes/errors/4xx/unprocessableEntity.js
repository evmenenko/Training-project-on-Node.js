const errorsInfo = require('../../../constants/errorsInfo');

/**
 * Server cannot process the request because there is a logical error in a sent data.
 */
module.exports = class UnprocessableEntity extends Error {
    
    constructor(message = errorsInfo['4xx'].unprocessableEntity.message) {
        super(message);
        super.name = errorsInfo['4xx'].unprocessableEntity.name;
        this.status = 422;
    }
}