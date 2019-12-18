const TagRepository = require('../repositories/TagRepository');
const MovieRepository = require('../repositories/MovieRepository');
const NotFound = require('../../../classes/errors/4xx/notFound');

module.exports = class TagService {

  constructor() {
    this.TagRepository = new TagRepository();
    this.MovieRepository = new MovieRepository();
  }

  async create(object) {
    return await this.TagRepository.create(object);
  }

  async readById(id) {

    let tag = await this.TagRepository.readById(id);

    if (!tag) {
      throw new NotFound('Tag is not found');
    }

    return tag;
  }
  
  async readAll() {
    return await this.TagRepository.readAll();
  }

  async update(id, object) {

    let tag = await this.TagRepository.readById(id);

    if (!tag) {
      throw new NotFound('Tag for updating is not found');
    }

    return await this.TagRepository.update(id, object);
  }

  async destroy(id) {

    let tag = await this.TagRepository.readById(id);

    if (!tag) {
      throw new NotFound('Tag for deleting is not found');
    }

    return await this.TagRepository.destroy(id);
  }
}