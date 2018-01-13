module.exports = function(sequelize, DataType) {
    var User = sequelize.define("User", {
        name: DataType.STRING,
        email: DataType.STRING,
        zip_code: DataType.INT
    })

    User.associate = function(models) {
        User.hasMany(models.Dogs, {
            onDelete: 'cascade'
        });
    };

    return User;
}