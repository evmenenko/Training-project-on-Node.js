const TicketRepository = require('../repositories/TicketRepository');
const DisplayRepository = require('../repositories/DisplayRepository');
const UserRepository = require('../../users/repositories/UserRepository');
const NotFound = require('../../../classes/errors/4xx/NotFound');
const UnprocessableEntity = require('../../../classes/errors/4xx/UnprocessableEntity');
const { Display, User } = require('../../../dbModels');

class TicketService {

  constructor() {
    this.TicketRepository = new TicketRepository();
    this.DisplayRepository = new DisplayRepository();
    this.UserRepository = new UserRepository();
  }

  async create(object) {

    let ticket = await this.TicketRepository.get({
      where: {
        userId: object.userId,
        displayId: object.displayId,
      },
    });

    if (ticket) {
      throw new UnprocessableEntity('Ticket already in use');
    }

    let user = await this.UserRepository.readById(object.userId);

    if (!user) {
      throw new NotFound('User is not found');
    }

    let display = await this.DisplayRepository.readById(object.displayId);

    if (!display) {
      throw new NotFound('Display is not found');
    }

    return await this.TicketRepository.create(object);
  }

  async readById(id) {

    let ticket = await this.TicketRepository.readById(id);

    if (!ticket) {
      throw new NotFound('Ticket is not found');
    }

    return ticket;
  }

  async readAll(pageNumber, recordsAmount) {
    return await this.TicketRepository.getAll({
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
          attributes: [ 'id', 'startDate', 'endDate'],
        },
      ],
      offset: recordsAmount * (pageNumber - 1),
      limit: recordsAmount,
    });
  }

  async readByMovieId(movieId, pageNumber, recordsAmount) {
		
		return await this.TicketRepository.getAll({
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
          attributes: [ 'id', 'startDate', 'endDate'],
          where: { movieId },
        },
      ],
      offset: recordsAmount * (pageNumber - 1),
      limit: recordsAmount,
    });
  }

  async cancelTicket(object) {

    let ticket = await this.TicketRepository.get({
      where: {
        userId: object.userId,
        displayId: object.displayId,
      },
    });

    if (!ticket) {
      throw new NotFound('Ticket is not found');
    }

    return await ticket.destroy();
  }

  async destroy(id) {

    let ticket = await this.TicketRepository.readById(id);

    if (!ticket) {
      throw new NotFound('Ticket for deleting is not found');
    }

    return await ticket.destroy();
  }
}

module.exports = new TicketService();