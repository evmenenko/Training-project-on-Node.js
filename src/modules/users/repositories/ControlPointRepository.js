const { ControlPoint, Role } = require('../../../dbModels');

module.exports = class ControlPointRepository {

  async create(object) {
    return await ControlPoint.create(object);
  }

  async readById(id) {
    return await ControlPoint.findByPk(id, {
      attributes: [ 'id', 'route', 'method' ],
    });
  }

  async readFullInfoById(id) {
    return await ControlPoint.findByPk(id, {
      attributes: [ 'id', 'route', 'method' ],
      include: [
        { 
          model: Role,
          as: 'roles',
          attributes: [ 'id', 'name' ],
        }
      ],
    });
  }

  async readAll() {
    return await ControlPoint.findAll({
      attributes: [ 'id', 'route', 'method' ],
    });
  }

  async update(id, object) {
    return await ControlPoint.update(object, {
      where: { id: id },
    });
  }

  async destroy(id) {
    return await ControlPoint.destroy({
      where: { id: id },
    });
  }

  async get(option) {
    return await ControlPoint.findOne(option);
  }

  async getAll(option) {
    return await ControlPoint.findAll(option);
  }
}