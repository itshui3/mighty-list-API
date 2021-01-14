const mongoose = require('mongoose')

const Schema = mongoose.Schema
const model = mongoose.model

// 2:00 pm 1.12.21 READ ME NEXT POMA
// next steps:
// [0] refer to client sourcecode to define types as necessary
// [1] build user typing throughout client -> api -> db

const boardSchema = Schema({
// define fields
    title: { type: String, required: true },
    tasks: String
})

const pageSchema = Schema({
// define fields
    title: { type: String, required: true },
    pages: [this],
    boards: [boardSchema]
})

const uSchema = Schema({
    name: { type: String, unique: true, required: true },
    pages: [pageSchema],
    boards: [boardSchema]
})

const uModel = model('user', uSchema)

module.exports = {
    uModel
}