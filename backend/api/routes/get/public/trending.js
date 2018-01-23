const Boom = require('boom')
const Article =  require('../../../models/article')

module.exports.trending = async function trending(request, h) {

    try {
        let articles = await Article.find({isPosted: true}, {content: 0, cover: 0}).sort({views: -1}).limit(3)
        return h.response(articles)
    } catch (err) {
        throw Boom.badData(err)
    }

} 