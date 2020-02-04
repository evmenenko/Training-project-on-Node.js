const Sequelize = require('sequelize');
const dbInfo = require('./config/database.json');

const sequelize = new Sequelize(
  dbInfo.dev.database,
  dbInfo.dev.username,
  dbInfo.dev.password,
  {
    host: dbInfo.dev.host,
    dialect: dbInfo.dev.dialect,
    logging: dbInfo.dev.logging,
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