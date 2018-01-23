const mongoose = require('mongoose')

const schema = mongoose.Schema({
    title: { type: String, required: true, max: 150 },
    content: String,
    isPosted: { type: Boolean, required: true, default: false },
    cover: { type: String, default: false },
    intro: { type: String, required: false, max: 500 },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
    views: Number
})

module.exports = mongoose.model('Article', schema)