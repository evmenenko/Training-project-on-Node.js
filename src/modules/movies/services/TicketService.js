const TicketRepository = require('../repositories/TicketRepository');
const NotFound = require('../../../classes/errors/4xx/notFound');

class TicketService {

  constructor() {
    this.TicketRepository = new TicketRepository();
  }

  async readById(id) {

    let ticket = await this.TicketRepository.readById(id);

    if (!ticket) {
      throw new NotFound('Ticket is not found');
    }

    return ticket;
  }

  async readAll() {
    return await this.TicketRepository.readAll();
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