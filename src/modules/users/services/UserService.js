const UserRepository = require('../repositories/UserRepository');
const RequestRepository = require('../repositories/RequestRepository');
const UnprocessableEntity = require('../../../classes/errors/4xx/unprocessableEntity');
const NotFound = require('../../../classes/errors/4xx/notFound');

class UserService {

  constructor() {
    this.UserRepository = new UserRepository();
    this.RequestRepository = new RequestRepository();
  }

  async create(object) {

    let user;
    
    user = await this.UserRepository.get({
      where: { login: object.login },
    });

    if (user) {
      throw new UnprocessableEntity('Login already in use');
    }

    user = await this.UserRepository.get({
      where: { email: object.email },
    });

    if (user) {
      throw new UnprocessableEntity('Email already in use');
    }
    
    return await this.UserRepository.create(object);
  }

  async readByFirstAndLastName(firstName, lastName) {

    let users = await this.UserRepository.getAll({
      where: {
        firstName,
        lastName,
      },
      attributes: [ 'id', 'login', 'firstName', 'lastName', 'email' ],
      include: [
        { 
          model: Role,
          as: 'roles',
          attributes: [ 'id', 'name' ],
        }
      ],
    });

    return users;
  }

  async readById(id) {

    let user = await this.UserRepository.readById(id);

    if (!user) {
      throw new NotFound('User is not found');
    }

    return user;
  }
  
  async readAll() {
    return await this.UserRepository.readAll();
  }

  async update(id, object) {

    let user;
    
    user = await this.UserRepository.get({
      where: { login: object.login },
    });

    if (user && user.id !== id) {
      throw new UnprocessableEntity('Login already in use');
    }

    user = await this.UserRepository.get({
      where: { email: object.email },
    });

    if (user && user.id !== id) {
      throw new UnprocessableEntity('Email already in use');
    }

    user = await this.UserRepository.readById(id);

    if (!user) {
      throw new NotFound('User for updating is not found');
    }

    await user.update(object);

    return user;
  }

  async destroy(id) {

    let user = await this.UserRepository.readById(id);

    if (!user) {
      throw new NotFound('User for deleting is not found');
    }

    let request = await this.RequestRepository.get({
      where: { userId: id },
    });

    if (!request) {
      throw new UnprocessableEntity('User cannot be deleted without a deletion request');
    }

    await user.destroy();
    await request.destroy();
  }
}

module.exports = new UserService();