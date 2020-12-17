module.exports = (sequelize, DataTypes) => {
    const TST = sequelize.define('tst', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        userId: DataTypes.INTEGER,
        projectId: DataTypes.INTEGER

    });
    TST.associate = models => {
        TST.hasMany(models.bug, {
            onDelete: "cascade"
        });
        TST.belongsTo(models.user, {
            as: 'user',
            foreignKey: "userId"
        });
        TST.belongsTo(models.project, {
            as: 'project',
            foreignKey: "projectId"
        });

    };
    return TST;
}