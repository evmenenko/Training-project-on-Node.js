const UrlRepository = require('../repositories/UrlRepository')
const UnprocessableEntity = require('../../../classes/errors/4xx/unprocessableEntity')
const NotFound = require('../../../classes/errors/4xx/notFound')

module.exports = class UrlService {

    constructor() {
        this.UrlRepository = new UrlRepository()
    }

    async create(object) {

        let url
        
        url = await this.UrlRepository.get({
            where: {
                route: object.route,
                method: object.method,
            },
        })

        if (url) {
            throw new UnprocessableEntity('Url already in use')
        }

        return await this.UrlRepository.create(object)
    }

    async readById(id) {

        let url = await this.UrlRepository.readById(id)

        if (!url) {
            throw new NotFound('Url is not found')
        }

        return url
    }
    
    async readAll() {
        return await this.UrlRepository.readAll()
    }

    async update(id, object) {

        let url

        url = await this.UrlRepository.readById(id)

        if (!url) {
            throw new NotFound('Url for updating is not found')
        }
        
        url = await this.UrlRepository.get({
            where: {
                route: object.route,
                method: object.method,
            },
        })

        if (url && url.id !== id) {
            throw new UnprocessableEntity('Url already in use')
        }

        return await this.UrlRepository.update(id, object)
    }

    async destroy(id) {

        let url = await this.UrlRepository.readById(id)

        if (!url) throw new NotFound('Url for deleting is not found')

        return await this.UrlRepository.destroy(id)
    }
}