'use strict'

module.exports = {
    find: (model, query = {}, skip = 0, take = 999, populate = '', sort = {}) => {
        return model
            .find(query)
            .sort(sort)
            .populate(populate)
            .lean()
            .skip(parseInt(skip))
            .limit(parseInt(take))
            .then(data => ({ data }))
            .catch(error => ({ error }))
    },
    findOne: (model, query = {}, populate = '') => {
        return model
            .findOne(query)
            .populate(populate)
            .lean()
            .then(data => ({ data }))
            .catch(error => ({ error }))
    },
    save: (model, object) => {
        return new model(object)
            .save()
            .then(data => ({ data }))
            .catch(error => ({ error }))
    },
    saveMany: (model, object) => {
        return model.collection
            .insert(object)
            .then(data => ({ data }))
            .catch(error => ({ error }))
    }
}
