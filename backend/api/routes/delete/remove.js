const Boom = require('boom')
const Article =  require('../../models/article')

module.exports.remove = async function remove(request, h) {

    await Article.remove({_id: request.params.id})

    return h.response().code(204)

}