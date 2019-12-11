/**
 * Возвращается сервером, если в запросе клиента обнаружена синтаксическая ошибка.
 */
module.exports = class BadRequest extends Error {
    
    constructor(message = 'The request contains a syntax error') {
        super(message)
        super.name = 'BadRequest'
        this.status = 400
    }
}