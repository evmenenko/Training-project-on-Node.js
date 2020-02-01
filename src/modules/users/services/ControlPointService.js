const ControlPointRepository = require('../repositories/ControlPointRepository');
const UnprocessableEntity = require('../../../classes/errors/4xx/unprocessableEntity');
const NotFound = require('../../../classes/errors/4xx/notFound');

class ControlPointService {

  constructor() {
    this.ControlPointRepository = new ControlPointRepository();
  }

  async create(object) {

    let controlPoint = await this.ControlPointRepository.get({
      where: {
        route: object.route,
        method: object.method,
      },
    });

    if (controlPoint) {
      throw new UnprocessableEntity('Control point already in use');
    }

    return await this.ControlPointRepository.create(object);
  }

  async readById(id) {

    let controlPoint = await this.ControlPointRepository.readById(id);

    if (!controlPoint) {
      throw new NotFound('Control point is not found');
    }

    return controlPoint;
  }
  
  async readAll() {
    return await this.ControlPointRepository.readAll();
  }

  async update(id, object) {

    let controlPoint;
    
    controlPoint = await this.ControlPointRepository.get({
      where: {
        route: object.route,
        method: object.method,
      },
    });

    if (controlPoint && controlPoint.id !== id) {
      throw new UnprocessableEntity('Control point already in use');
    }

    controlPoint = await this.ControlPointRepository.readById(id);

    if (!controlPoint) {
      throw new NotFound('Control point for updating is not found');
    }

    await controlPoint.update(object);

    return controlPoint;
  }

  async destroy(id) {

    let controlPoint = await this.ControlPointRepository.readById(id);

    if (!controlPoint) {
      throw new NotFound('Control point for deleting is not found');
    }

    await controlPoint.destroy();
  }
}

module.exports = new ControlPointService();