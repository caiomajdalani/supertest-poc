'use strict'

const Dependencies = require(`../../helpers/dependencies`)
    , dependencies = new Dependencies()

const Reports = require(`../../helpers/reports`)
    , reports = new Reports()

const Requests = require(`../../helpers/requests`)
    , requests = new Requests()

const Payloads = require(`../../helpers/payloads`)
    , payloads = new Payloads()

const test = this // gambiarra

describe(`USERS - `, () => {
    describe(`POST`, () => {
        let body
        beforeEach(() => {
            return new Promise((resolve) => {
                body = payloads.users()
                resolve()
            })
        })
        it(`Test Body`, function (done) {
            done()
        })
    })
})
