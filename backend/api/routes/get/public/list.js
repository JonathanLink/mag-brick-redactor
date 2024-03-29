const Boom = require('boom')
const Article =  require('../../../models/article')

module.exports.list = async function list(request, h) {
    console.log("public list")
    try {
        let articles = await Article.find({isPosted: true}, {content: 0} ).sort({updated: -1})
        return h.response(articles)
    } catch (err) {
        throw Boom.badData(err)
    }

} 
