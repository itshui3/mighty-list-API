const users = require('../assets/users.js')

const usersResolver = () => users
const userResolver = (p, args) => {
    return users.find((user) => user.name === args.name)
}


module.exports = {
    usersResolver,
    userResolver
}