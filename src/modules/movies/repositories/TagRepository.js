const { tag, movie } = require('../../../classes/dbModels')

module.exports = class TagRepository {

    async create(object) {
        return await tag.create(object)
    }

    async readById(id) {
        return await tag.findByPk(id, {
            attributes: [ 'id', 'name' ],
        })
    }

    async readFullInfoById(id) {
        return await tag.findByPk(id, {
            attributes: [ 'id', 'name' ],
            include: [
                { 
                    model: movie,
                    as: 'movie',
                    attributes: [ 'id', 'name' ],
                },
            ],
        })
    }

    async readFullInfoById(id) {
        return await tag.findByPk(id, {
            attributes: [ 'id', 'name' ],
            include: [
                { 
                    model: movie,
                    as: 'movie',
                    attributes: [ 'id', 'name', 'preview_url' ],
                },
            ],
        })
    }

    async readAll() {
        return await tag.findAll({
            attributes: [ 'id', 'name' ],
        })
    }

    async update(id, object) {
        return await tag.update(object, {
            where: { id: id },
        })
    }

    async destroy(id) {
        return await tag.destroy({
            where: { id: id },
        })
    }

    async get(option) {
        return await tag.findOne(option)
    }

    async getAll(option) {
        return await tag.findAll(option)
    }
}