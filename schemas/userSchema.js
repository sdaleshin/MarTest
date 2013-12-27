module.exports = function(db) {
        return db.model('UserShema', UserShema());
}

function UserShema () {
        var Schema = require('mongoose').Schema;

        return new Schema({
            Name: { type: String, required: true },
            Email: { type: String, required: true },
            Age: { type: Number, required: true },
            Position: { type: String, required: false }
    });
}