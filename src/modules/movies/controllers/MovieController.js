import MovieService from '../services/MovieService'
import ResponseFormat from '../../../helpers/ResponseFormat'

class MovieController {

	constructor() {
    this.MovieService = new MovieService();
	}

	async create(ctx, next) {

		let movie = await this.MovieService.create({
			name: ctx.body.name,
			previewUrl: ctx.body.previewUrl,
			description: ctx.body.description,
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
		
		let movies = await this.MovieService.readAll();

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
		
		let movie = await this.MovieService.readById(ctx.params.id);

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

		let updatedMovie = await this.MovieService.update(
			ctx.params.id,
			{
        name: ctx.body.name,
        previewUrl: ctx.body.previewUrl,
        description: ctx.body.description,
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

		await this.MovieService.destroy(ctx.params.id);

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

export default new MovieController();