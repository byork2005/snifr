module.exports = function(sequelize, DataTypes) {
    var Communication = sequelize.define("Communication", {
        initiator_id: {
            type: Data
        }
    });

    Communication.associate = function(models) {

    }
}


// message_id
// initiator_id
// receiver_id
// message_type
// date
// message_content

// to and from id's will be foreign keys. Need to put associate relations on the dogs page.
