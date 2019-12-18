const { Display, Movie } = require('../../../classes/dbModels');

module.exports = class DisplayRepository {

  async create(object) {
    return await Display.create(object);
  }

  async readById(id) {
    return await Display.findByPk(id, {
      attributes: [ 'id', 'movieId', 'startDate', 'endDate' ],
    });
  }

  async readFullInfoById(id) {
    return await Display.findByPk(id, {
      attributes: [ 'id', 'startDate', 'endDate' ],
      include: [
        { 
          model: Movie,
          as: 'movie',
          attributes: [ 'id', 'name', 'previewUrl', 'description' ],
        }
      ],
    });
  }

  async readAll() {
    return await Display.findAll({
      attributes: [ 'id', 'startDate', 'endDate' ],
      include: [
        { 
          model: Movie,
          as: 'movie',
          attributes: [ 'id', 'name', 'previewUrl' ],
        }
      ],
    });
  }

  async update(id, object) {
    return await Display.update(object, {
      where: { id: id },
    });
  }

  async destroy(id) {
    return await Display.destroy({
      where: { id: id },
    });
  }

  async get(option) {
    return await Display.findOne(option);
  }

  async getAll(option) {
    return await Display.findAll(option);
  }
}