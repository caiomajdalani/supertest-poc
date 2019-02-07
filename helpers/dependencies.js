'use strict'

const supertest = require("supertest")

class Dependencies {
    constructor() {
        this.expect = require("chai").expect
        this.assert = require(`chai`).assert
        this.addContext = require('mochawesome/addContext')
        this.request = supertest("http://localhost:5000/")
        this.faker = require('faker')
        this.mongoose = require('mongoose')
        this.bluebird = require(`bluebird`)
    }
}

module.exports = new Dependencies()