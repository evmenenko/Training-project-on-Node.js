const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    
	class ControlPoint extends Sequelize.Model {}

	ControlPoint.init({
		route: {
			type: DataTypes.STRING(2048),
			allowNull: false,
			validate: {
				isUrl: true,
			},
		},
		method: {
			type: DataTypes.STRING(20),
			allowNull: false,
		},
	}, {
		sequelize,
		charset: 'UTF8MB4',
		engine: 'INNODB',
		paranoid: true,
		createdAt: false,
		updatedAt: false,
		deletedAt: 'deleted_date',
		modelName: 'ControlPoint',
		tableName: 'control_points',
		name: {
			singular: 'ControlPoint',
			plural: 'ControlPoints',
		},
	});
	
	ControlPoint.associate = function(models) {
		ControlPoint.belongsToMany(models.Role, {
			through: models.AccessRestriction,
			onUpdate: 'restrict',
			onDelete: 'restrict',
			foreignKey: 'controlPointId',
		});
	}

	return ControlPoint;
}