const Boom = require('boom')
const Article =  require('../../models/article')

module.exports.list = async function list(request, h) {

    try {
        let articles = await Article.find({}).sort({updated: -1})
        return h.response(articles)
    } catch (err) {
        throw Boom.badData(err)
    }

} 