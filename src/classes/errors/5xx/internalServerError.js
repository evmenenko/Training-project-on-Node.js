/**
 * Любая внутренняя ошибка сервера, которая не входит в рамки остальных ошибок класса.
 */
module.exports = class InternalServerError extends Error {
    
    constructor(message = 'Internal server error') {
        super(message)
        super.name = 'InternalServerError'
        this.status = 500
    }
}