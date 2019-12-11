const { movie, display, tag } = require('../../../classes/dbModels')

module.exports = class MovieRepository {

    async create(object) {
        return await movie.create(object)
    }

    async readById(id) {
        return await movie.findByPk(id, {
            attributes: [ 'id', 'name', 'description', 'preview_url' ],
            include: [
                { 
                    model: tag,
                    as: 'tags',
                    attributes: [ 'id', 'name' ],
                },
            ],
        })
    }

    async readFullInfoById(id) {
        return await movie.findByPk(id, {
            attributes: [ 'id', 'name', 'description', 'preview_url' ],
            include: [
                { 
                    model: tag,
                    as: 'tags',
                    attributes: [ 'id', 'name' ],
                },
                { 
                    model: display,
                    as: 'displays',
                    attributes: [ 'id', 'start_date', 'end_date' ],
                },
            ],
        })
    }

    async readAll() {
        return await movie.findAll({
            attributes: [ 'id', 'name', 'description', 'preview_url' ],
        })
    }

    async update(id, object) {
        return await movie.update(object, {
            where: { id: id },
        })
    }

    async destroy(id) {
        return await movie.destroy({
            where: { id: id },
        })
    }

    async get(option) {
        return await movie.findOne(option)
    }

    async getAll(option) {
        return await movie.findAll(option)
    }
}