const { Request, User, Role } = require('../../../dbModels');

module.exports = class RequestRepository {

  async create(object) {
    return await Request.create(object);
  }

  async readById(id) {
    return await Request.findByPk(id, {
      attributes: [ 'id', 'userId' ],
    });
  }

  async readFullInfoById(id) {
    return await Request.findByPk(id, {
      attributes: [ 'id' ],
      include: [
        {
          model: User,
          as: 'user',
          attributes: [ 'id', 'login', 'email' ],
          include: [
            {
              model: Role,
              as: 'roles',
              attributes: [ 'id', 'name' ],
            },
          ],
        },
      ],
    });
  }

  async readAll() {
    return await Request.findAll({
      attributes: [ 'id' ],
      include: [
        {
          model: User,
          as: 'user',
          attributes: [ 'id', 'login' ],
        },
      ],
    });
  }

  async destroy(id) {
    return await Request.destroy({
      where: { id: id },
    });
  }

  async get(option) {
    return await Request.findOne(option);
  }

  async getAll(option) {
    return await Request.findAll(option);
  }
}