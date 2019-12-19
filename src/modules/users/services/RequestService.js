const RequestRepository = require('../repositories/RequestRepository');
const UnprocessableEntity = require('../../../classes/errors/4xx/unprocessableEntity');
const NotFound = require('../../../classes/errors/4xx/notFound');

module.exports = class RequestService {

  constructor() {
    this.RequestRepository = new RequestRepository();
  }

  async create(object) {

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

    await request.destroy(id);
  }
}