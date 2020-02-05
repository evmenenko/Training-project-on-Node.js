const DisplayRepository = require('../repositories/DisplayRepository');
const MovieRepository = require('../repositories/MovieRepository');
const NotFound = require('../../../classes/errors/4xx/notFound');
const { Movie } = require('../../../dbModels');

class DisplayService {

  constructor() {
    this.DisplayRepository = new DisplayRepository();
    this.MovieRepository = new MovieRepository();
  }

  async create(object) {

    let movie = await this.MovieRepository.readById(object.movieId);

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
  
  async readAll(pageNumber, recordsAmount) {
    return await this.DisplayRepository.getAll({
      attributes: [ 'id', 'startDate', 'endDate' ],
      include: [
        { 
          model: Movie,
          as: 'movie',
          attributes: [ 'id', 'name', 'previewUrl' ],
        }
      ],
      offset: recordsAmount * (pageNumber - 1),
      limit: recordsAmount,
    });
  }

  async update(id, object) {

    let display = await this.DisplayRepository.readById(id)

    if (!display) {
      throw new NotFound('Display for updating is not found');
    }

    let movie = await this.MovieRepository.readById(movieId);

    if (!movie) {
      throw new NotFound('Movie is not found');
    }

    await display.update(object)

    return display;
  }

  async destroy(id) {

    let display = await this.DisplayRepository.readById(id);

    if (!display) {
      throw new NotFound('Display for deleting is not found');
    }

    return await display.destroy(id);
  }
}

module.exports = new DisplayService();