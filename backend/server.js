
'use strict';
const Hapi = require('hapi')
const mongoose = require('mongoose')
const API = require('./api/api.js')

const server = Hapi.Server({ 
    host: '0.0.0.0', 
    port: 8000,
    routes: {cors: { origin: ['*'] }}
})


async function openDatabaseConnection(databaseURL) {
    var success = true
    do {
        mongoose.Promise = global.Promise
        try {
            return await mongoose.connect(databaseURL, { useMongoClient: true })
        } catch (err) {
            console.log(err)
            console.log("fail")
            success = false
        }
    } while(!success) 
}

let brickRoutes

async function main() {

   
    try {
        brickRoutes = API.routes.map(r => { r.path = '/api/brick/redactor' + r.path; return r; })
        server.route(brickRoutes)
    } catch (err) {
        console.log(err)
    }

     // Create a server with a host and port
    try {
        await server.start()
        console.log('SANDBOXED MAG REST API Server running at:', server.info.uri)
    } catch(err) {
        console.log(err)
    } 

    // Open connection to mongo database

    const databaseURL = (process.env.NODE_ENV === 'production' ) ? `mongodb://${process.env.APP_NAME}_redactor_mongo_1/redactor` : 'mongodb://redactor_mongo/redactor_dev'
    console.log(databaseURL)
    await openDatabaseConnection(databaseURL)
    console.log("SUCCESS")

  

}

main()

//setTimeout(main, 10000) // wait for db to be ready 
