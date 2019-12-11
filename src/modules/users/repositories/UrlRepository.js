const { url, role } = require('../../../classes/dbModels')

module.exports = class UrlRepository {

    async create(object) {
        return await url.create(object)
    }

    async readById(id) {
        return await url.findByPk(id, {
            attributes: [ 'id', 'route', 'method' ],
        })
    }

    async readFullInfoById(id) {
        return await url.findByPk(id, {
            attributes: [ 'id', 'route', 'method' ],
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
            attributes: [ 'id', 'route', 'method' ],
        })
    }

    async update(id, object) {
        return await url.update(object, {
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