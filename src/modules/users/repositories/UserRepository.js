const { User, Role } = require('../../../dbModels');

module.exports = class UserRepository {

  async create(object) {
    return await User.create(object);
  }

  async readById(id) {
    return await User.findByPk(id, {
      attributes: [ 'id', 'login', 'firstName', 'lastName', 'email' ],
    });
  }

  async readFullInfoById(id) {
    return await User.findByPk(id, {
      attributes: [ 'id', 'login', 'firstName', 'lastName', 'email' ],
      include: [
        { 
          model: Role,
          as: 'roles',
          attributes: [ 'id', 'name' ],
        }
      ]
    });
  }

  async readAll(pageNumber, recordsAmount) {
    return await User.findAll({
      attributes: [ 'id', 'login' ],
      include: [
        { 
          model: Role,
          as: 'roles',
          attributes: [ 'id', 'name' ],
        }
      ],
      offset: recordsAmount * (pageNumber - 1),
      limit: recordsAmount,
    });
    
  }

  async update(id, object) {
    return await User.update(object, {
      where: { id: id },
    });
  }

  async destroy(id) {
    return await User.destroy({
      where: { id: id },
    });
  }

  async get(option) {
    return await User.findOne(option);
  }

  async getAll(option) {
    return await User.findAll(option);
  }
}