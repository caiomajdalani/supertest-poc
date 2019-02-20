'use strict'

module.exports = {
    http: (request, method, url, headers = {}, body = {}, httpCode = 201) => {
        return request[method](url)
            .set(headers)
            .send(body)
            .expect(httpCode)
    }
}