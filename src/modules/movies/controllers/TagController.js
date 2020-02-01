const TagService = require('../services/TagService');
const ResponseFormat = require('../../../helpers/ResponseFormat');

class TagController {

	async create(ctx, next) {

		let tag = await TagService.create({
			name: ctx.request.body.name,
		});

		ctx.status = 201;
		ctx.body = ResponseFormat
			.build(
				tag,
				"Tag created successfully",
				201,
				"success"
			);
  }
  
  async addTags(ctx, next) {

    let addedTags = await TagService.addTags(ctx.request.body.tagNames);
    
    ctx.state.tagIds = [];

    for (let tag of addedTags) {
      ctx.state.tagIds.push(tag.id);
    }
	}

	async readAll(ctx, next) {
		
		let tags = await TagService.readAll();

		ctx.status = 200;
		ctx.body = ResponseFormat
			.build(
				tags,
				"Tags read successfully",
				200,
				"success"
			);
	}

	async readById(ctx, next) {
		
		let tag = await TagService.readById(ctx.params.id);

		ctx.status = 200;
		ctx.body = ResponseFormat
			.build(
				tag,
				"Tag read successfully",
				200,
				"success"
			);
	}

	async update(ctx, next) {

		let updatedTag = await TagService.update(
			ctx.params.id,
			{
        name: ctx.request.body.name,
			}
		);

		ctx.status = 200;
		ctx.body = ResponseFormat
			.build(
				{
					id: updatedTag.id,
          name: updatedTag.name,
				},
				"Tag updated successfully",
				200,
				"success"
			);
	}

	async destroy(ctx, next) {

		await TagService.destroy(ctx.params.id);

		ctx.status = 200;
		ctx.body = ResponseFormat
			.build(
				{},
				"Tag deleted successfully",
				200,
				"success"
			);
	}
}

module.exports = new TagController();