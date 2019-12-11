const { display, movie } = require('../../../classes/dbModels')

module.exports = class DisplayRepository {

    async create(object) {
        return await display.create(object)
    }

    async readById(id) {
        return await display.findByPk(id, {
            attributes: [ 'id', 'movie_id', 'start_date', 'end_date' ],
        })
    }

    async readFullInfoById(id) {
        return await display.findByPk(id, {
            attributes: [ 'id', 'start_date', 'end_date' ],
            include: [
                { 
                    model: movie,
                    as: 'movie',
                    attributes: [ 'id', 'name', 'preview_url', 'description' ],
                }
            ],
        })
    }

    async readAll() {
        return await display.findAll({
            attributes: [ 'id', 'start_date', 'end_date' ],
            include: [
                { 
                    model: movie,
                    as: 'movie',
                    attributes: [ 'id', 'name', 'preview_url' ],
                }
            ],
        })
    }

    async update(id, object) {
        return await display.update(object, {
            where: { id: id },
        })
    }

    async destroy(id) {
        return await display.destroy({
            where: { id: id },
        })
    }

    async get(option) {
        return await display.findOne(option)
    }

    async getAll(option) {
        return await display.findAll(option)
    }
}