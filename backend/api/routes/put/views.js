const Boom = require('boom')
const Article =  require('../../models/article')

module.exports.views = async function views(request, h) {
    
    await Article.update({_id: request.params.id}, { $inc: { views: 1 } } )
    
    return h.response().code(204)

} 
