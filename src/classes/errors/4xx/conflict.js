/**
 * The request could not be completed due to conflicting access to the resource.
 */
module.exports = class Conflict extends Error {
    
    constructor(message = 'The request could not be completed due to conflicting access to the resource') {
        super(message)
        super.name = 'Conflict'
        this.status = 409
    }
}