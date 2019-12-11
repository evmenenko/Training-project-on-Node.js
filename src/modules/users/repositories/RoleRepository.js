const { role } = require('../../../classes/dbModels')

module.exports = class RoleRepository {

    async create(object) {
        return await role.create(object)
    }

    async readById(id) {
        return await role.findByPk(id, {
            attributes: [ 'id', 'name' ],
        })
    }

    async readAll() {
        return await role.findAll({
            attributes: [ 'id', 'name' ],
        })
    }

    async update(id, object) {
        return await role.update(object, {
            where: { id: id },
        })
    }

    async destroy(id) {
        return await role.destroy({
            where: { id: id },
        })
    }

    async get(option) {
        return await role.findOne(option)
    }

    async getAll(option) {
        return await role.findAll(option)
    }
}