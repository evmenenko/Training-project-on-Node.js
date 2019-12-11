/**
 * Server cannot process the request because there is a logical error in a sent data.
 */
module.exports = class UnprocessableEntity extends Error {
    
    constructor(message = 'Server cannot process the request because there is a logical error in a sent data') {
        super(message)
        super.name = 'UnprocessableEntity'
        this.status = 422
    }
}