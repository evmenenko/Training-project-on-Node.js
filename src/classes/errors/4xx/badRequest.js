/**
 * It is returned by the server if a syntax error is detected in a client request.
 */
module.exports = class BadRequest extends Error {
    
    constructor(message = 'The request contains a syntax error') {
        super(message)
        super.name = 'BadRequest'
        this.status = 400
    }
}