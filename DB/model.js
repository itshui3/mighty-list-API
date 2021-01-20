const mongoose = require('mongoose')

const Schema = mongoose.Schema
const model = mongoose.model

const boardSchema = Schema({
// define fields
    title: { type: String, required: true },
    tasks: String
})

const pageSchema = Schema({
// define fields
    title: { type: String, required: true },
    pages: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'page'
    },
    boards: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'board'
    }
})

const uSchema = Schema({
    name: { type: String, unique: true, required: true },
    pages: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'page'
    },
    boards: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'board'
    }
})

const boardModel = model('board', boardSchema)
const pageModel = model('page', pageSchema)
const uModel = model('user', uSchema)

module.exports = {
    uModel,
    pageModel,
    boardModel
}