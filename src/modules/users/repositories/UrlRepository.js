const { url, role } = require('../../../classes/dbModels')

module.exports = class UrlRepository {

    async create(url) {
        return await url.create(url)
    }

    async readById(id) {
        return await url.findByPk(id, {
            attributes: [ 'id', 'url', 'method' ],
        })
    }

    async readFullInfoById(id) {
        return await url.findByPk(id, {
            attributes: [ 'id', 'url', 'method' ],
            include: [
                { 
                    model: role,
                    as: 'roles',
                    attributes: [ 'id', 'name' ],
                }
            ],
        })
    }

    async readAll() {
        return await url.findAll({
            attributes: [ 'id', 'url', 'method' ],
        })
    }

    async update(id, url) {
        return await url.update(url, {
            where: { id: id },
        })
    }

    async destroy(id) {
        return await url.destroy({
            where: { id: id },
        })
    }

    async get(option) {
        return await url.findOne(option)
    }

    async getAll(option) {
        return await url.findAll(option)
    }
}