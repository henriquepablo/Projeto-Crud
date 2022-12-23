const {mongoose, Schema}  = require("mongoose");

const imagemSchema = Schema({
    nome: {
        type: String
    },
    url: {
        type: String
    }
});

module.exports = mongoose.model('Image', imagemSchema);