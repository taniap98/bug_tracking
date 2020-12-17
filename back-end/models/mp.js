module.exports = (sequelize, DataTypes) => {
    const MP = sequelize.define('mp', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        userId: DataTypes.INTEGER,
        projectId: DataTypes.INTEGER

    });
    MP.associate = models => {
        MP.belongsTo(models.user, {
            as: 'user', //userId
            foreignKey: "userId"
        });
        MP.belongsTo(models.project, {
            as: 'project',
            foreignKey: "projectId"
        })
    };
    return MP;
}