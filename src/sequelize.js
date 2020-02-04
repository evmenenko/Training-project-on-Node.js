const Sequelize = require('sequelize');

const sequelize = new Sequelize("online_cinema_db", "root", "root", {
    host: "localhost",
    dialect: "mysql",
    logging: false
});

const connect = async () => {
    await sequelize.authenticate();
    await sequelize.sync();
}

module.exports = {
    sequelize,
    connect,
    Sequelize,
}