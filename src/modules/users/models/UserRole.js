const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    
    class RoleUser extends Sequelize.Model {}

    RoleUser.init({}, {
        sequelize,
        charset: 'UTF8MB4',
        engine: 'INNODB',
        paranoid: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: 'deleted_date',
        modelName: 'user_role',
        tableName: 'users_roles',
    })

    return RoleUser
}