const { Display, Movie } = require('../../../dbModels');

module.exports = class DisplayRepository {

  async create(object) {
    return await Display.create(object);
  }

  async readById(id) {
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

  async get(option) {
    return await Display.findOne(option);
  }

  async getAll(option) {
    return await Display.findAll(option);
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
}