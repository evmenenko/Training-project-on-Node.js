const { Ticket, Display, User, Movie } = require('../../../dbModels');

module.exports = class TicketRepository {

  async create(object) {
    return await Ticket.create(object);
  }

  async readById(id) {
    return await Ticket.findByPk(id, {
      attributes: [ 'id', 'userId', 'displayId' ],
    });
  }

  async update(id, object) {
    return await Ticket.update(object, {
      where: { id: id },
    });
  }

  async destroy(id) {
    return await Ticket.destroy({
      where: { id: id },
    });
  }

  async get(option) {
    return await Ticket.findOne(option);
  }

  async getAll(option) {
    return await Ticket.findAll(option);
  }
}