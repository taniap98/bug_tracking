module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    email: DataTypes.STRING,
    password: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    nrMP: DataTypes.INTEGER,
    nrTST: DataTypes.INTEGER

    });

    User.associate = models => {
        User.hasMany(models.project, {
            
            onDelete: "cascade"
        });
        User.hasOne(models.tst, {
            onDelete: "cascade"
        });
        User.hasOne(models.mp, {
            onDelete: "cascade"
        });
    };
    
   return User;
    
}