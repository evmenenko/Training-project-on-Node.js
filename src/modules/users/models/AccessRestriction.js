const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    
    class AccessRestriction extends Sequelize.Model {}

    AccessRestriction.init({}, {
        sequelize,
        charset: 'UTF8MB4',
        engine: 'INNODB',
        paranoid: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: 'deleted_date',
        modelName: 'access_restriction',
    })

    return AccessRestriction
}