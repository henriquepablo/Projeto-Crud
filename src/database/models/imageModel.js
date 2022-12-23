const {mongoose, Schema}  = require("mongoose");

const imagemSchema = Schema({
    nome: {
        type: String
    },
    img: {
        data: Buffer,
        contentType: String
    }
});

module.exports = mongoose.model('Image', imagemSchema);