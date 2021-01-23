const { helloResolver } = require('./dummyResolvers.js')

const {
    usersResolver,
    userResolver,
    addUserResolver,
    // resolve embedded pages/boards in userRoot
    userPageResolver,
    userBoardResolver
} = require('./userResolver.js')
const { 
    pageResolver, 
    addPageResolver,
    addPageResolverRoot,
    // resolve embedded page/boards in pageRoot
    pagePageResolver,
    pageBoardResolver
} = require('./pageResolver.js')
const {
    addBoardPageResolver,
    addBoardRootResolver
} = require('./boardResolver')

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
    addPageResolverRoot,
        // page embedded pages/board resolvers
        pagePageResolver,
        pageBoardResolver,

    // board resolvers
    addBoardPageResolver,
    addBoardRootResolver
}