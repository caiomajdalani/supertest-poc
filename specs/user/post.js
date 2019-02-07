'use strict'

const dependencies = require(`../../helpers/dependencies`)
    , reports = require(`../../helpers/reports`)
    , requests = require(`../../helpers/requests`)
    , payloads = require(`../../helpers/payloads`)

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
        })
    })
})
