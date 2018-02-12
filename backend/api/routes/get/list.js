const Boom = require('boom')
const Article =  require('../../models/article')

module.exports.list = async function list(request, h) {
    console.log("admin list")
    try {
        let articles = await Article.find({}, {content: 0, cover: 0, intro: 0}).sort({updated: -1})
        return h.response(articles)
    } catch (err) {
        throw Boom.badData(err)
    }

} 
