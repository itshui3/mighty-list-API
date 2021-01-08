const { huiPages } = require('./pages.js')
const { taskBoard } = require('./boards.js')

const users = [

    { id: 0, name: 'Hui', pages: huiPages, boards: [taskBoard] }

]

module.exports = users