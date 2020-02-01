/**
 * It is returned by the server if requested resource is not found at the specified URL.
 */
module.exports = class NotFound extends Error {
    
    constructor(message = 'The resource is not found') {
        super(message)
        super.name = 'NotFound'
        this.status = 404
    }
}