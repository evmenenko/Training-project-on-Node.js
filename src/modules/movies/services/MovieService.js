const MovieRepository = require('../repositories/MovieRepository');
const { Tag } = require('../../../dbModels');
const UnprocessableEntity = require('../../../classes/errors/4xx/unprocessableEntity');
const NotFound = require('../../../classes/errors/4xx/notFound');

class MovieService {

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

  async readAll(pageNumber, recordsAmount) {

    return await this.MovieRepository.getAll({
      attributes: [ 'id', 'name', 'description', 'previewUrl' ],
      include: [
        {
          model: Tag,
          as: 'tags',
          attributes: [ 'id', 'name' ],
        },
      ],
      offset: recordsAmount * (pageNumber - 1),
      limit: recordsAmount,
    });
  }

  async readByTags(tagIds, pageNumber, recordsAmount) {

    return await this.MovieRepository.getAll({
      attributes: [ 'id', 'name', 'previewUrl' ],
      include: [
        {
          model: Tag,
          as: 'tags',
          attributes: [ 'id', 'name' ],
          where: { id: tagIds },
        },
      ],
      offset: recordsAmount * (pageNumber - 1),
      limit: recordsAmount,
    });
  }
  
  async update(id, object) {
		
    let movie;
    
    movie = await this.MovieRepository.get({
      where: { name: object.name },
    });

    // посмотреть, можно ли оптимизировать немного проверки
    
    if (movie && movie.id !== +id) {
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

module.exports = new MovieService();