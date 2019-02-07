'use strict'

const mongoose = require(`./dependencies`).mongoose
    , bluebird = require(`./dependencies`).bluebird

class Databases {
    mongoDisconnect(callback) {
        mongoose.connection.close(() => {
            console.info(`[*] MONGODB DISCONNECTED`)
            callback()
        })
    }
    mongoConnect(url, options) {
        mongoose.Promise = bluebird

        mongoose.set(`debug`, true)

        mongoose.connect(url, options)

        mongoose.connection.on(`connected`, () => {
            console.info(`[*] MONGODB GET CONNECTED`)
        })

        mongoose.connection.on(`error`, (error) => {
            console.debug(`[*] MONGODB GOT AN ERROR WHEN WAS TRYING TO GET CONNECTED`)
            console.error(`[*] REASON => `, error)
        })
    }
}

module.exports = new Databases()

// OPTIONS: {
//         autoIndex: _mongodb.INDEX,
//         ssl: _mongodb.SSL,
//         poolSize: _mongodb.POOLS,
//         autoReconnect: _mongodb.RECONNECT,
//         reconnectTries: _mongodb.TRIES,
//         replicaSet: _mongodb.REPLICA,
//         useNewUrlParser: true 
//     },
//     URI: _mongodb.URI,