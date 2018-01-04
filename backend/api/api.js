const routes = require('./routes')
const Joi = require('joi')

const API = {
    routes: [{ 
                method: 'POST',
                path: '/article',
                handler: routes.add
            },
            { 
                method: 'GET',
                path: '/articles',
                handler: routes.list
            },
            {
                method: 'GET',
                path: '/article/{id}',
                config: {
                    validate: {
                        params: {
                            id: Joi.string().length(24).regex(/^[0-9a-fA-F]+$/).required()
                        }
                    }
                },
                handler: routes.article
            }]
}

module.exports = API

