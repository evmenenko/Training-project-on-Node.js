/**
 * Возвращается сервером, если для доступа к запрашиваемому ресурсу требуется аутентификация.
 */
module.exports = class Unauthorized extends Error {
    
    constructor(message = 'To access the requested resource requires authentication') {
        super(message)
        super.name = 'Unauthorized'
        this.status = 401
    }
}