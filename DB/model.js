const mongoose = require('mongoose')

const Schema = mongoose.Schema
const model = mongoose.model

// 2:00 pm 1.12.21 READ ME NEXT POMA
// next steps:
// [0] refer to client sourcecode to define types as necessary
// [1] build user typing throughout client -> api -> db

const boardSchema = Schema({
// define fields
    title: String,
    tasks: String
})

const pageSchema = Schema({
// define fields
    title: String,
    pages: [this],
    boards: [boardSchema]
})

const userSchema = Schema({
    name: String,
    pages: [pageSchema],
    boards: [boardSchema]
})

const userModel = model('user', userSchema)

module.exports = {
    userModel
}