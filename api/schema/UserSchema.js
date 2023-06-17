const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    username: { type: String, required: true },
    pass: { type: String, required: true },
    email: String
})

const User = mongoose.model('User', UserSchema)

module.exports = User