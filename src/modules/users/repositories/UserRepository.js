const { user, role } = require('../../../classes/dbModels')

module.exports = class UserRepository {

    async create(object) {
        return await user.create(object)
    }

    async readById(id) {
        return await user.findByPk(id, {
            attributes: [ 'id', 'login', 'password', 'first_name', 'last_name', 'email' ],
        })
    }

    async readFullInfoById(id) {
        return await user.findByPk(id, {
            attributes: [ 'id', 'login', 'password', 'first_name', 'last_name', 'email' ],
            include: [
                { 
                    model: role,
                    as: 'roles',
                    attributes: [ 'id', 'name' ],
                }
            ]
        })
    }

    async readAll() {
        return await user.findAll({
            attributes: [ 'id', 'login' ],
            include: [
                { 
                    model: role,
                    as: 'roles',
                    attributes: [ 'id', 'name' ],
                }
            ]
        })
    }

    async update(id, object) {
        return await user.update(object, {
            where: { id: id },
        })
    }

    async destroy(id) {
        return await user.destroy({
            where: { id: id },
        })
    }

    async get(option) {
        return await user.findOne(option)
    }

    async getAll(option) {
        return await user.findAll(option)
    }
}