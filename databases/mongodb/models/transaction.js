'use strict'

const mongoose = require(`../../../helpers/dependencies`).mongoose
const Schema = mongoose.Schema

const _schema = new Schema({
    cardInformation: {
        internalNumber: Number,
        productCode: {
            type: String,
            enum: [
                `COMMON`, `VIP`
            ],
            default: `COMMON`
        },
        sequenceCode: Number
    },
    date: Date,
    farePrice: Number
})

module.exports = mongoose.model('transaction', _schema)

