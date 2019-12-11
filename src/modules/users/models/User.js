const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    
    class User extends Sequelize.Model {}

    User.init({
        login: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true,
                notNull: true,
            },
        },
        password: {
            type: DataTypes.STRING(30),
            allowNull: false,
            notEmpty: true,
            notNull: true,
        },
        first_name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
    }, {
        sequelize,
        charset: 'UTF8MB4',
        engine: 'INNODB',
        paranoid: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: 'deleted_date',
        modelName: 'user',
        name: {
            singular: 'user',
            plural: 'users',
        },
    })
    
    User.associate = function(models) {
        User.belongsToMany(models.role, {
            through: models.user_role,
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'user_id',
        })
        User.belongsToMany(models.display, {
            through: models.ticket,
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'user_id',
        })
        User.hasOne(models.request, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'user_id',
        })
    }

    return User
}