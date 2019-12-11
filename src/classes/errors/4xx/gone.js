/**
 * It is returned by the server if the resource used at the specified URL, but was deleted and is no longer available.
 */
module.exports = class Gone extends Error {
    
    constructor(message = 'The resource has been deleted and is no longer available') {
        super(message)
        super.name = 'Gone'
        this.status = 410
    }
}