const MovieRepository = require('../repositories/MovieRepository');
const TagRepository = require('../repositories/TagRepository');
const NotFound = require('../../../classes/errors/4xx/notFound');

module.exports = class MovieService {

  constructor() {
    this.MovieRepository = new MovieRepository();
    this.TagRepository = new TagRepository();
  }

  async create(object) {

    for (let id of object.tagIds) {

			let tag = await this.TagRepository.readById(id);

			if (!tag) {
				throw new NotFound('One of the tags is not found');
			}
		}
		
		let movie = await this.MovieRepository.create(object);
		await movie.setTags(object.tagIds);

    return movie;
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

    let movie = await this.MovieRepository.readById(id)

    if (!movie) {
      throw new NotFound('Movie for updating is not found');
		}
		
		for (let tagId of object.tagIds) {

			let tag = await this.TagRepository.readById(tagId);

			if (!tag) {
				throw new NotFound('One of the tags is not found');
			}
		}
		
		await movie.setTags(object.tagIds);

		return await movie.update(object); // Что возвращать?
  }

  async destroy(id) {

    let movie = await this.MovieRepository.readById(id);

    if (!movie) {
      throw new NotFound('Movie for deleting is not found');
    }

    return await this.MovieRepository.destroy(id);
  }
}