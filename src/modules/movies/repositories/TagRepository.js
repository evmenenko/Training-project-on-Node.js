const { Tag, Movie } = require('../../../dbModels')

module.exports = class TagRepository {

  async create(object) {
    return await Tag.create(object);
  }

  async readById(id) {
    return await Tag.findByPk(id, {
      attributes: [ 'id', 'name' ],
    });
  }

  async readFullInfoById(id) {
    return await Tag.findByPk(id, {
      attributes: [ 'id', 'name' ],
      include: [
        { 
          model: Movie,
          as: 'movies',
          attributes: [ 'id', 'name' ],
        },
      ],
    });
  }

  async readFullInfoById(id) {
    return await Tag.findByPk(id, {
      attributes: [ 'id', 'name' ],
      include: [
        { 
          model: Movie,
          as: 'movies',
          attributes: [ 'id', 'name', 'previewUrl' ],
        },
      ],
    });
  }

  async readAll() {
    return await Tag.findAll({
      attributes: [ 'id', 'name' ],
    });
  }

  async update(id, object) {
    return await Tag.update(object, {
      where: { id: id },
    });
  }

  async destroy(id) {
    return await Tag.destroy({
      where: { id: id },
    });
  }

  async get(option) {
    return await Tag.findOne(option);
  }

  async getAll(option) {
    return await Tag.findAll(option);
  }

  async findOrCreate(option) {
    return await Tag.findOrCreate(option);
  }
}