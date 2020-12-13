module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define('project', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: DataTypes.STRING,

    });
    Project.associate = models => {
        Project.hasMany(models.mp, {
            onDelete: "cascade"
        });
        Project.hasMany(models.tst, {
            onDelete: "cascade"
        });
        Project.belongsTo(models.user, {
            as: 'user',
            foreignKey: "id"
        });
    };
   return Project;
}