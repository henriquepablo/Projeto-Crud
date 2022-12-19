const {Schema, model} = require('mongoose');

const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
});

UserSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
});

module.exports = model('User', UserSchema);