const { request, user, role } = require('../../../classes/dbModels')

module.exports = class RequestRepository {

    async create(request) {
        return await request.create(request)
    }

    async readById(id) {
        return await request.findByPk(id, {
            attributes: [ 'id' ],
            include: [
                {
                    model: user,
                    as: 'user',
                    attributes: [ 'id', 'login', 'email' ],
                    include: [
                        {
                            model: role,
                            as: 'role',
                            attributes: [ 'id', 'name' ],
                        },
                    ],
                },
            ],
        })
    }

    async readAll() {
        return await request.findAll({
            attributes: [ 'id' ],
            include: [
                {
                    model: user,
                    as: 'user',
                    attributes: [ 'id', 'login' ],
                },
            ],
        })
    }

    /* ???????????????????????????????????? */
    async update(id, request) {
        return await request.update(request, {
            where: { id: id },
        })
    }

    async destroy(id) {
        return await request.destroy({
            where: { id: id },
        })
    }

    async get(option) {
        return await request.findOne(option)
    }

    async getAll(option) {
        return await request.findAll(option)
    }
}