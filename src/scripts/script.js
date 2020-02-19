const CronJob = require('cron').CronJob;
const MovieRepository = require('../modules/movies/repositories/MovieRepository');
const Op = require('sequelize').Op;

const movieRepository = new MovieRepository();

const job = new CronJob(
  '0 0 0 * * *',
  async function() {

    let movies = await movieRepository.getAll({
      attributes: [ 'id' ],
      include: [
        {
          model: Display,
          as: 'displays',
          attributes: [ 'endDate' ],
          where: {
            endDate: {
              [Op.lt]: new Date(),
            },
          },
        },
      ],
    });

    movies.forEach(movie => {
      movie.destroy();
    });
  }
);

module.exports = () => {
  job.start();
}