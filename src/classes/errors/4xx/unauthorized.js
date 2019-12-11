/**
 * It is returned by the server if authentication is required to access the requested resource.
 */
module.exports = class Unauthorized extends Error {
    
    constructor(message = 'To access the requested resource requires authentication') {
        super(message)
        super.name = 'Unauthorized'
        this.status = 401
    }
}