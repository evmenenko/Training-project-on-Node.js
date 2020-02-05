const { User } = require('../../../dbModels');

module.exports = class UserRepository {

  async create(object) {
    return await User.create(object);
  }

  async get(option) {
    return await User.findOne(option);
  }

  async getAll(option) {
    return await User.findAll(option);
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
}