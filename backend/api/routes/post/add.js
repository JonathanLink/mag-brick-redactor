const Boom = require('boom')
const Article =  require('../../models/article')

module.exports.add = async function add(request, h) {
    
    let articleObject
    try {
        articleObject = JSON.parse(request.payload)
    } catch(err) {
        throw Boom.unsupportedMediaType(err)   
    }

    let articleModel  = new Article(articleObject) 
    try {
        await articleModel.save()
        return h.response().created()
    } catch (err) {
        throw Boom.badData(err)
    }

} 
