'use strict'

class Reports {
    addContext(reporter, test, method, url, headers = {}, body = {}, httpCode = 201, response) {
        return reporter(test, {
            title: 'Request Parameters',
            value: {
                URL: url,
                Method: method,
                Headers: headers,
                Body: body,
                HttpCodeExpect: httpCode,
                Response: response
            }
        })
    }
}

module.exports = new Reports()