const Boom = require('boom')
const Article =  require('../../models/article')

module.exports.display = async function display(request, h) {
    
    let articleObject
    try {
        articleObject = JSON.parse(request.payload)
    } catch(err) {
        throw Boom.unsupportedMediaType(err)   
    }

    
    let _article = await Article.update({_id: request.params.id}, { $inc: { displayed: 1 } } )
    
    return h.response().code(204)

} 
