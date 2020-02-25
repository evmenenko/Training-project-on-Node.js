const TagRepository = require('../repositories/TagRepository');
const NotFound = require('../../../classes/errors/4xx/NotFound');

class TagService {

  constructor() {
    this.TagRepository = new TagRepository();
  }

  async create(object) {
    return await this.TagRepository.create(object);
  }

  async addTags(tagNames) {

    let tags = [];

    for (let tagName of tagNames) {

      let [ tag, ] = await this.TagRepository.findOrCreate({
        where: {
          name: tagName
        },
        defaults: {
          name: tagName
        },
      });

      tags.push(tag);
    }

    return tags;
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

    await tag.update(object);

    return tag
  }

  async destroy(id) {

    let tag = await this.TagRepository.readById(id);

    if (!tag) {
      throw new NotFound('Tag for deleting is not found');
    }

    return await tag.destroy();
  }
}

module.exports = new TagService();