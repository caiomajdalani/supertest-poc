'use strict'

const postgres = require(`../../../helpers/dependencies`).postgres

class Postgres {
    select(connString, query) {
        let client = new postgres.Client(connString)
        await client.connect()
        let res = await client.query(query);
        let result = []
        res.rows.forEach(row => {
            result.push(row);
        });
        await client.end()
        return result
    }
}

module.exports = new Postgres()