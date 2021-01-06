const { helloResolver } = require('./dummyResolvers.js')

const { userResolver, usersResolver } = require('./userResolver.js')

module.exports = {
    helloResolver,
    userResolver,
    usersResolver
}