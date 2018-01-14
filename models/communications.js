module.exports = function(sequelize, DataTypes) {
    var Communication = sequelize.define("Communication", {
        message_type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        message_content: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        timestamps: true,
    });


}


// message_id
// initiator_id
// receiver_id
// message_type
// date
// message_content

// to and from id's will be foreign keys. Need to put associate relations on the dogs page.
