module.exports = function(sequelize, DataType) {
    var User = sequelize.define("User", {
        name: DataType.STRING,
        email: DataType.STRING,
        password: DataType.STRING,
        zip_code: DataType.INTEGER
    });

    User.associate = function(models) {
        User.hasMany(models.Dog, {
            onDelete: 'cascade'
        });
    };
    
    User.findByUsername = function(username, cb){
        User.findOne({ where: {username: username}}).then(user => {
            if (user){
                return cb(null, user);
            } else {
                return cb(null, null);
            }
        });
    };
    
    return User;
};