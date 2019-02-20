'use strict'

const dependencies = require(`../../helpers/dependencies`)
    , reports = require(`../../helpers/reports`)
    , requests = require(`../../helpers/requests`)
    , payloads = require(`../../helpers/payloads`)
    , errors = require(`../../helpers/errors`)
    , headers = require(`../../helpers/headers`)
    , mongo = require(`../../databases/mongodb`)
    , postgres = require(`../../databases/postgres`)

const test = this

describe('Credit File Processor - ', () => {
    //criar before pra gerar massa de dados no banco
    before(() => {
        return new Promise(async (resolve) => {

        })
    })
    describe(`GET /v1/transactions - `, () => {
        describe(`Basic Flux - `, () => {
            let transactions
                , err
            before(() => {
                return new Promise(async (resolve) => {
                    mongo.config.connect(mongo.config.dbConfig())
                    const { data: data, error: error } = await mongo.queries.find(mongo.models.transaction, {})
                    if (data) {
                        transactions = data
                    } else {
                        error = err
                    }
                    mongo.config.disconnect()
                    resolve()
                })
            })
            it(`Correct Parameters -> Return 200 - OK`, function (done) {
                if (err) {
                    dependencies.assert.throws(errors.throw(error), "Erro de comunicação com Banco de Dados.");
                } else {
                    requests.http('get', '/v1/transactions', {}, {}, 200)
                        .end(async (err, res) => {
                            expect(res.body).to.equal(transactions)
                            reports.addContext(test, 'get', '/v1/transactions', {}, {}, 200, (res ? res.body : err))
                            done(err)
                        })
                }
            })
        })
    })
    describe(`GET /v1/transactions/${transactionId} - `, () => {
        describe(`Basic Flux - `, () => {
            let transaction
                , err
            before(() => {
                return new Promise(async (resolve) => {
                    mongo.config.connect(mongo.config.dbConfig())
                    const { data: data, error: error } = await mongo.queries.findOne(mongo.models.transaction, { _id: transactionId })
                    if (data) {
                        transaction = data
                    } else {
                        error = err
                    }
                    mongo.config.disconnect()
                    resolve()
                })
            })
            it(`Return 200 - OK`, function (done) {
                if (err) {
                    dependencies.assert.throws(errors.throw(error), "Erro de comunicação com Banco de Dados.");
                } else {
                    requests.http('get', `/v1/transaction/${transactionId}`, {}, {}, 200)
                        .end(async (err, res) => {
                            expect(res.body).to.equal(transaction)
                            reports.addContext(test, 'get', `/v1/transaction/${transactionId}`, {}, {}, 200, (res ? res.body : err))
                            done(err)
                        })
                }
            })
        })
    })
})