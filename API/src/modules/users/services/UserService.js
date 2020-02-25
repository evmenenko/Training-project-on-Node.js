const UserRepository = require('../repositories/UserRepository');
const RequestRepository = require('../repositories/RequestRepository');
const { Role } = require('../../../dbModels');
const UnprocessableEntity = require('../../../classes/errors/4xx/UnprocessableEntity');
const NotFound = require('../../../classes/errors/4xx/NotFound');
const Mailer = require('../../../classes/Mailer');

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

  async readById(id) {

    let user = await this.UserRepository.get({
      where: { id },
      attributes: [ 'id', 'login', 'firstName', 'lastName', 'email' ],
      include: [
        { 
          model: Role,
          as: 'roles',
          attributes: [ 'id', 'name' ],
        }
      ],
    });

    if (!user) {
      throw new NotFound('User is not found');
    }

    return user;
  }

  async readByName(firstName, lastName, pageNumber, recordsAmount) {

    return await this.UserRepository.getAll({
      where: { firstName, lastName },
      attributes: [ 'id', 'login', 'firstName', 'lastName', 'email' ],
      include: [
        { 
          model: Role,
          as: 'roles',
          attributes: [ 'id', 'name' ],
        }
      ],
      offset: recordsAmount * (pageNumber - 1),
      limit: recordsAmount,
    });
  }
  
  async readAll(pageNumber, recordsAmount) {

    return await this.UserRepository.getAll({
      attributes: [ 'id', 'login', 'firstName', 'lastName', 'email' ],
      include: [
        { 
          model: Role,
          as: 'roles',
          attributes: [ 'id', 'name' ],
        }
      ],
      offset: recordsAmount * (pageNumber - 1),
      limit: recordsAmount,
    });
  }

  async update(id, object) {

    let user;
    
    user = await this.UserRepository.get({
      where: { login: object.login },
    });

    if (user && user.id !== +id) {
      throw new UnprocessableEntity('Login already in use');
    }

    user = await this.UserRepository.get({
      where: { email: object.email },
    });

    if (user && user.id !== +id) {
      throw new UnprocessableEntity('Email already in use');
    }

    user = await this.UserRepository.get({
      where: { id },
      attributes: [ 'id', 'login', 'firstName', 'lastName', 'email' ],
    });

    if (!user) {
      throw new NotFound('User for updating is not found');
    }

    await user.update(object);

    return user;
  }

  async changePassword(id, oldPassword, newPassword, repeatedNewPassword) {

    if (newPassword != repeatedNewPassword) {
      throw new UnprocessableEntity('Password is incorrectly repeated');
    }

    let user = await this.UserRepository.get({
      where: { id },
      attributes: [ 'id', 'password' ],
    });

    if (!user) {
      throw new NotFound('User for updating is not found');
    }

    if (!user.validPassword(oldPassword)) {
      throw new UnprocessableEntity('Password entered incorrectly');
    }
    
    await user.update({ password: newPassword });

    return user;
  }

  async destroy(id) {

    let user = await this.UserRepository.get({
      where: { id },
    });

    if (!user) {
      throw new NotFound('User for deleting is not found');
    }

    let request = await this.RequestRepository.get({
      where: { userId: id },
    });

    if (!request) {
      throw new UnprocessableEntity('User cannot be deleted without a deletion request');
    }

    const deletedUser = {
      email: user.email,
    };

    await user.destroy();
    await request.destroy();

    return deletedUser;
  }
}

module.exports = new UserService();