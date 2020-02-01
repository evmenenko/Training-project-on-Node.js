/**
 * It is returned by the server if there is insufficient information from the client to process the request.
 */
module.exports = class RetryWith extends Error {
    
    constructor(message = 'Did not enough information') {
        super(message)
        super.name = 'RetryWith'
        this.status = 449
    }
}