const MovieService = require('../services/MovieService');
const ResponseFormat = require('../../../helpers/ResponseFormat');
const paginationInfo = require('../../../constants/paginationInfo');

class MovieController {

	async create(ctx, next) {

		let movie = await MovieService.create({
			name: ctx.request.body.name,
			previewUrl: ctx.request.body.previewUrl,
			description: ctx.request.body.description,
		});

		await next(); // TagController.addTags

		await movie.setTags(ctx.state.tagIds);

		ctx.status = 201;
		ctx.body = ResponseFormat
			.build(
				movie,
				"Movie created successfully",
				201,
				"success"
			);
	}

	async readAll(ctx, next) {
		
		let page = parseInt(ctx.query.pageNumber, 10) || paginationInfo.movies.defaultPage;
		let amount = parseInt(ctx.query.recordsAmount, 10) || paginationInfo.movies.defaultAmount;
		let movies;
		
		if (ctx.query.tagIds) {
      if (!Array.isArray(ctx.query.tagIds)) {
        ctx.query.tagIds = [ ctx.query.tagIds ];
      }
			movies = await MovieService.readAll(page, amount);
		}
		else {
			movies = await MovieService.readByTags(ctx.query.tagIds, page, amount);
		}

		ctx.status = 200;
		ctx.body = ResponseFormat
			.build(
				movies,
				"Movies read successfully",
				200,
				"success"
			);
	}

	async readById(ctx, next) {
		
		let movie = await MovieService.readById(ctx.params.id);

		ctx.status = 200;
		ctx.body = ResponseFormat
			.build(
				movie,
				"Movie read successfully",
				200,
				"success"
			);
	}

	async update(ctx, next) {

		let updatedMovie = await MovieService.update(
			ctx.params.id,
			{
        name: ctx.request.body.name,
        previewUrl: ctx.request.body.previewUrl,
        description: ctx.request.body.description,
			}
		);

		await next(); // TagController.addTags

		await updatedMovie.setTags(ctx.state.tagIds);

		ctx.status = 200;
		ctx.body = ResponseFormat
			.build(
				updatedMovie,
				"Movie updated successfully",
				200,
				"success"
			);
	}

	async destroy(ctx, next) {

		await MovieService.destroy(ctx.params.id);

		ctx.status = 200;
		ctx.body = ResponseFormat
			.build(
				{},
				"Movie deleted successfully",
				200,
				"success"
			);
	}
}

module.exports = new MovieController();