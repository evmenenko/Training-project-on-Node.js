const Sequelize = require('sequelize');

const sequelize = new Sequelize("online_cinema_db", "root", "root", {
    host: "localhost",
    dialect: "mysql",
    logging: false
});

async function connect() {
    await sequelize.authenticate();
    await sequelize.sync();
}

module.exports = {
    sequelize,
    connect,
    Sequelize,
}