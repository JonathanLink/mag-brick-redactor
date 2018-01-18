const Boom = require('boom')
const Article =  require('../../models/article')

module.exports.update = async function update(request, h) {
    
    let articleObject
    try {
        articleObject = JSON.parse(request.payload)
    } catch(err) {
        throw Boom.unsupportedMediaType(err)   
    }

    let _article = await Article.update({_id: request.params.id}, 
        {
            title: articleObject.title,
            content: articleObject.content,
            isPosted: articleObject.isPosted
        }
    )
    
    return h.response().code(204)

} 
