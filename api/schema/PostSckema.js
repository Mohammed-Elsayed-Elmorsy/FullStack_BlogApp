const mongo = require("mongoose")
const { Schema } = mongo
const Postschema = mongo.Schema({
    title: { type: String },
    desc: { type: String },
    file: { type: String },
    owner: { type: Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true })

const Post = mongo.model('Post', Postschema)

module.exports = Post