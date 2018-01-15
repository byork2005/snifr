module.exports = function(sequelize, DataType) {
    var User = sequelize.define("User", {
        name: DataType.STRING,
        email: DataType.STRING,
        zip_code: DataType.INTEGER
    });

    User.associate = function(models) {
        User.hasMany(models.Dog, {
            onDelete: 'cascade'
        });
    };

    return User;
};