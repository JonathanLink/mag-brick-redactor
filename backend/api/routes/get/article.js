const Boom = require('boom')
const Article =  require('../../models/article')

module.exports.article = async function article(request, h) {

    let _article = await Article.find({_id: request.params.id})

    if (_article.length == 0) {
        console.log('fsd')
        throw Boom.notFound()
    }

    return h.response(_article)

} 