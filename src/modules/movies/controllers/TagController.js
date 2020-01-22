import TagService from '../services/TagService'
import ResponseFormat from '../../../helpers/ResponseFormat'

class TagController {

	constructor() {
    this.TagService = new TagService();
	}

	async create(ctx, next) {

		let tag = await this.TagService.create({
			name: ctx.body.name,
		});

		await next(); // TagController.addTags

		await tag.setRoles(ctx.state.roleIds);

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

    let addedTags = await this.TagService.addTags(ctx.body.tagNames);
    
    ctx.state.tagIds = [];

    for (let tag of addedTags) {
      ctx.state.tagIds.push(tag.id);
    }
	}

	async readAll(ctx, next) {
		
		let tags = await this.TagService.readAll();

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
		
		let tag = await this.TagService.readById(ctx.params.id);

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

		let updatedTag = await this.TagService.update(
			ctx.params.id,
			{
        name: ctx.body.name,
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

		await this.TagService.destroy(ctx.params.id);

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

export default new TagController();