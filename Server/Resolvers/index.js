const { helloResolver } = require('./dummyResolvers.js')

const {
    usersResolver,
    userResolver,
    addUserResolver,
    // resolve embedded pages/boards
    userPageResolver,
    userBoardResolver
} = require('./userResolver.js')
const { pageResolver, addPageResolver } = require('./pageResolver.js')

module.exports = {
    helloResolver,
    // user resolvers
    userResolver,
    usersResolver,
    addUserResolver,
        // user embedded pages/boards resolvers
        userPageResolver,
        userBoardResolver,
    // page resolvers
    pageResolver,
    addPageResolver,
        // page embedded pages/board resolvers
}