const mongoose = require('mongoose')

const schema = mongoose.Schema({
    title: { type: String, required: true, max: 150 },
    content: String,
    isPosted: { type: Boolean, required: true, default: false },
    cover: { type: String, default: false },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
    displayed: Number
})

module.exports = mongoose.model('Article', schema)