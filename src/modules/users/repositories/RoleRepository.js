const { Role } = require('../../../classes/dbModels');

module.exports = class RoleRepository {

  async create(object) {
    return await Role.create(object);
  }

  async readById(id) {
    return await Role.findByPk(id, {
      attributes: [ 'id', 'name' ],
    });
  }

  async readAll() {
    return await Role.findAll({
      attributes: [ 'id', 'name' ],
    });
  }

  async update(id, object) {
    return await Role.update(object, {
      where: { id: id },
    });
  }

  async destroy(id) {
    return await Role.destroy({
      where: { id: id },
    });
  }

  async get(option) {
    return await Role.findOne(option);
  }

  async getAll(option) {
    return await Role.findAll(option);
  }
}