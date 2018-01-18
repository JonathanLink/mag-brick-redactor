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
                path: '/public/articles',
                handler: routes.publicList
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
            },
            { 
                method: 'PUT',
                path: '/article/{id}',
                handler: routes.update
            },
            { 
                method: 'PUT',
                path: '/article/display/{id}',
                handler: routes.display
            },
            { 
                method: 'DELETE',
                path: '/article/{id}',
                handler: routes.remove
            }]
}

module.exports = API

