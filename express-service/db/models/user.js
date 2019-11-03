const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    login: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('user', UserSchema);