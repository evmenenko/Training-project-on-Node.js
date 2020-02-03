const { Ticket, Display, User, Movie } = require('../../../classes/dbModels');

module.exports = class TicketRepository {

  async create(object) {
    return await Ticket.create(object);
  }

  async readById(id) {
    return await Ticket.findByPk(id, {
      attributes: [ 'id', 'userId', 'displayId' ],
    });
  }

  async readFullInfoById(id) {
    return await Ticket.findByPk(id, {
      attributes: [ 'id' ],
      include: [
        {
          model: User,
          as: 'user',
          attributes: [ 'id', 'login', 'email', 'firstName', 'lastName' ],
        },
        {
          model: Display,
          as: 'display',
          attributes: [ 'id', 'startDate', 'endDate' ],
        },
      ],
    });
  }

  async readAll() {
    return await Ticket.findAll({
      attributes: [ 'id' ],
      include: [
        {
          model: User,
          as: 'user',
          attributes: [ 'id', 'login' ],
        },
        {
          model: Display,
          as: 'display',
          attributes: [],
          include: [
            {
              model: Movie,
              as: 'movie',
              attributes: [ 'id', 'name' ],
            },
          ],
        },
      ],
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