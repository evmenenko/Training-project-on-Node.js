const errorsInfo = require('../../../constants/errorsInfo');

/**
 * It is returned by the server if the resource used at the specified URL, but was deleted and is no longer available.
 */
module.exports = class Gone extends Error {
    
    constructor(message = errorsInfo['4xx'].gone.message) {
        super(message);
        super.name = errorsInfo['4xx'].gone.name;
        this.status = 410;
    }
}