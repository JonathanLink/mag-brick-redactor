const mongoose = require('mongoose')

const schema = mongoose.Schema({
    title: { type: String, required: true, max: 150 },
    content: String,
    isPosted: { type: Boolean, required: true, default: false },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Article', schema)