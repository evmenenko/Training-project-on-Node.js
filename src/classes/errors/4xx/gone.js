/**
 * Возвращается сервером, если ресурс раньше был по указанному URL, но был удалён и теперь недоступен.
 */
module.exports = class Gone extends Error {
    
    constructor(message = 'The resource has been deleted and is no longer available') {
        super(message)
        super.name = 'Gone'
        this.status = 410
    }
}