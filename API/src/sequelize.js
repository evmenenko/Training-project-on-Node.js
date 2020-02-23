const Sequelize = require('sequelize');
const dbInfo = require('./config/database.json');
const env = require('./settings').env;

const sequelize = new Sequelize(
  dbInfo[env].database,
  dbInfo[env].username,
  dbInfo[env].password,
  {
    host: dbInfo[env].host,
    dialect: dbInfo[env].dialect,
    logging: dbInfo[env].logging,
  }
);

const connect = async () => {
  await sequelize.authenticate();
  await sequelize.sync();
}

module.exports = {
  sequelize,
  connect,
  Sequelize,
}