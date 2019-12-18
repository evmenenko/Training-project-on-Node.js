const DisplayRepository = require('../repositories/DisplayRepository');
const MovieRepository = require('../repositories/MovieRepository');
const NotFound = require('../../../classes/errors/4xx/notFound');

module.exports = class DisplayService {

  constructor() {
    this.DisplayRepository = new DisplayRepository();
    this.MovieRepository = new MovieRepository();
  }

  async create(object) {

    let movie = await this.MovieRepository.get({
      where: { id: object.movieId },
    });

    if (!movie) {
      throw new NotFound('Movie is not found');
    }

    return await this.DisplayRepository.create(object);
  }

  async readById(id) {

    let display = await this.DisplayRepository.readById(id);

    if (!display) {
      throw new NotFound('Display is not found');
    }

    return display;
  }
  
  async readAll() {
    return await this.DisplayRepository.readAll();
  }

  async update(id, object) {

    let display = await this.DisplayRepository.readById(id)

    if (!display) {
      throw new NotFound('Display for updating is not found');
    }

    let movie = await this.MovieRepository.get({
      where: { id: object.movieId },
    });

    if (!movie) {
      throw new NotFound('Movie is not found');
    }

    return await this.DisplayRepository.update(id, object);
  }

  async destroy(id) {

    let display = await this.DisplayRepository.readById(id);

    if (!display) {
      throw new NotFound('Display for deleting is not found');
    }

    return await this.DisplayRepository.destroy(id);
  }
}