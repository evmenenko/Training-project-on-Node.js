const { Request, User, Role } = require('../../../classes/dbModels');

module.exports = class RequestRepository {

  async create(object) {
    return await Request.create(object);
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
}