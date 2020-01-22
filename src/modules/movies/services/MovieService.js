const MovieRepository = require('../repositories/MovieRepository');
const UnprocessableEntity = require('../../../classes/errors/4xx/unprocessableEntity');
const NotFound = require('../../../classes/errors/4xx/notFound');

module.exports = class MovieService {

  constructor() {
    this.MovieRepository = new MovieRepository();
  }

  async create(object) {
		
    let movie = await this.MovieRepository.get({
      where: { name: object.name },
    });
    
    if (movie) {
      throw new UnprocessableEntity('Movie with this name already in use');
    }
    
    return await this.MovieRepository.create(object);
  }

  async readById(id) {

    let movie = await this.MovieRepository.readById(id);

    if (!movie) {
      throw new NotFound('Movie is not found');
    }

    return movie;
  }

  async readAll() {
    return await this.MovieRepository.readAll();
  }
  
  async update(id, object) {
		
    let movie;
    
    movie = await this.MovieRepository.get({
      where: { name: object.name },
    });

    // посмотреть, можно ли оптимизировать немного проверки
    
    if (movie && movie.id !== id) {
      throw new UnprocessableEntity('Movie with this name already in use');
    }
    
    movie = await this.MovieRepository.readById(id);
    
    if (!movie) {
      throw new NotFound('Movie for updating is not found');
    }
    
    await movie.update(object);
    
		return movie;
  }

  async destroy(id) {

    let movie = await this.MovieRepository.readById(id);

    if (!movie) {
      throw new NotFound('Movie for deleting is not found');
    }

    return await movie.destroy();
  }
}