'use strict'

const reporter = require(`./dependencies`).addContext

module.exports = {
    addContext: (test, method, url, headers = {}, body = {}, httpCode = 201, response) => {
        return reporter(test, {
            title: 'Request / Response',
            value: {
                Request: {
                    URL: url,
                    Method: method,
                    Headers: headers,
                    Body: body,
                },
                Expect: {
                    HttpCode: httpCode,
                },
                Response: {
                    Body: response
                }
            }
        })
    }
}