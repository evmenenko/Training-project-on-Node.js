const { Movie, Display, Tag } = require('../../../classes/dbModels');

module.exports = class MovieRepository {

    async create(object) {
        return await Movie.create(object);
    }

    async readById(id) {
        return await Movie.findByPk(id, {
            attributes: [ 'id', 'name', 'description', 'previewUrl' ],
            include: [
                { 
                    model: Tag,
                    as: 'tags',
                    attributes: [ 'id', 'name' ],
                },
            ],
        });
    }

    async readFullInfoById(id) {
        return await Movie.findByPk(id, {
            attributes: [ 'id', 'name', 'description', 'previewUrl' ],
            include: [
                { 
                    model: Tag,
                    as: 'tags',
                    attributes: [ 'id', 'name' ],
                },
                { 
                    model: Display,
                    as: 'displays',
                    attributes: [ 'id', 'startDate', 'endDate' ],
                },
            ],
        });
    }

    async readAll() {
        return await Movie.findAll({
            attributes: [ 'id', 'name', 'description', 'previewUrl' ],
        });
    }

    async update(id, object) {
        return await Movie.update(object, {
            where: { id: id },
        });
    }

    async destroy(id) {
        return await Movie.destroy({
            where: { id: id },
        });
    }

    async get(option) {
        return await Movie.findOne(option);
    }

    async getAll(option) {
        return await Movie.findAll(option);
    }
}