const { role } = require('../../../classes/dbModels')

module.exports = class RoleRepository {

    async create(role) {
        return await role.create(role)
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

    async update(id, role) {
        return await role.update(role, {
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