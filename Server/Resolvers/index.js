const { helloResolver } = require('./dummyResolvers.js')

const { userResolver, usersResolver, addUserResolver } = require('./userResolver.js')
const { pageResolver, addPageResolver } = require('./pageResolver.js')

module.exports = {
    helloResolver,
    // user resolvers
    userResolver,
    usersResolver,
    addUserResolver,
    // page resolvers
    pageResolver,
    addPageResolver
}