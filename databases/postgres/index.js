'use strict'

const { Pool } = require('pg')

module.exports = {
    query: (config, query) => {
        return new Promise(async (resolve, reject) => {
            const pool = new Pool(config)
            const client = await pool.connect().then(async client => {
                const result = await client.query(query).then(result => {
                    client.release()
                    resolve(result)
                }).catch(err => {
                    reject(err)
                })
            }).catch(err => {
                reject(err)
            })
        })
    },
    dbConfig: (host, database, user, password) => {
        return {
            host: host,
            port: 5432,
            database: database,
            user: user,
            password: password
        }
    },
}
