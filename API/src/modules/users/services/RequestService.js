const RequestRepository = require('../repositories/RequestRepository');
const UserRepository = require('../repositories/UserRepository');
const UnprocessableEntity = require('../../../classes/errors/4xx/UnprocessableEntity');
const NotFound = require('../../../classes/errors/4xx/NotFound');

class RequestService {

  constructor() {
    this.RequestRepository = new RequestRepository();
    this.UserRepository = new UserRepository();
  }

  async create(object) {

    let user = await this.UserRepository.get({
      where: { id: object.userId },
    });

    if (!user) {
      throw new UnprocessableEntity('User for deleting is not found');
    }

    let request = await this.RequestRepository.get({
      where: { userId: object.userId },
    });

    if (request) {
      throw new UnprocessableEntity('Request has been already sent');
    }

    return await this.RequestRepository.create(object);
  }

  async readById(id) {

    let request = await this.RequestRepository.readById(id);

    if (!request) {
      throw new NotFound('Request is not found');
    }

    return request;
  }
  
  async readAll() {
    return await this.RequestRepository.readAll();
  }

  async destroy(id) {

    let request = await this.RequestRepository.readById(id);

    if (!request) {
      throw new NotFound('Request for deleting is not found');
    }

    await request.destroy();
  }
}

module.exports = new RequestService();