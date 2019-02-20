'use strict'

const mongoose = require(`../../helpers/dependencies`).mongoose
    , bluebird = require(`../../helpers/dependencies`).bluebird

module.exports = {
    disconnect: () => {
        mongoose.connection.close(() => {
        })
    },
    connect: (dbConfig) => {
        mongoose.Promise = bluebird

        mongoose.set(`debug`, true)

        mongoose.connect(dbConfig.url, dbConfig.options)

        mongoose.connection.on(`connected`, () => {
            console.info(`[*] MONGODB GET CONNECTED AT ${new Date}`)
        })

        mongoose.connection.on(`error`, (error) => {
            console.debug(`[*] MONGODB GOT AN ERROR WHEN WAS TRYING TO GET CONNECTED`)
            console.error(`[*] REASON => `, error)
        })

        mongoose.connection.on(`disconnected`, () => {
            console.info(`[*] MONGODB DISCONNECTED AT ${new Date}`)
        })
    },
    dbConfig: () => {
        return {
            url: `mongodb://localhost:27017/admin`,
            options: {
                useNewUrlParser: true
            }
        }
    }
}