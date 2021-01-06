const users = require('../assets/users.js')

const usersResolver = () => users
const userResolver = (p, a) => {
    users.find((user) => user.id === a.id)
}

module.exports = {
    usersResolver,
    userResolver
}