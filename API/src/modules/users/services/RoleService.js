const RoleRepository = require('../repositories/RoleRepository');
const UnprocessableEntity = require('../../../classes/errors/4xx/UnprocessableEntity');
const NotFound = require('../../../classes/errors/4xx/NotFound');

class RoleService {

  constructor() {
    this.RoleRepository = new RoleRepository();
  }

  async create(object) {

    let role = await this.RoleRepository.get({
      where: { name: object.name },
    });

    if (role) {
      throw new UnprocessableEntity('This name already in use');
    }

    return await this.RoleRepository.create(object);
  }

  async readById(id) {

    let role = await this.RoleRepository.readById(id);

    if (!role) {
      throw new NotFound('Role is not found');
    }

    return role;
  }
  
  async readAll() {
    return await this.RoleRepository.readAll();
  }

  async update(id, object) {

    let role;
    
    role = await this.RoleRepository.get({
      where: { name: object.name },
    });

    if (role && role.id !== +id) {
      throw new UnprocessableEntity('Name already in use');
    }

    role = await this.RoleRepository.readById(id);

    if (!role) {
      throw new NotFound('Role for updating is not found');
    }

    await role.update(object);

    return role;
  }

  async destroy(id) {

    let role = await this.RoleRepository.readById(id);

    if (!role) {
      throw new NotFound('Role for deleting is not found');
    }

    await role.destroy(id);
  }
}

module.exports = new RoleService();