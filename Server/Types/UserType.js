const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLID,
    GraphQLList
} = require('graphql')

const PageType = require('./PageType.js')
const BoardType = require('./BoardType.js')

const { pageResolver } = require('../Resolvers/pageResolver')
const {
    usersResolver,
    userResolver,
    addUserResolver,
    // resolve embedded pages/boards
    userPageResolver,
    userBoardResolver
} = require('../Resolvers/userResolver')

const UserType = new GraphQLObjectType({
    name: 'UserType',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },

        pages: { 
            type: new GraphQLList(PageType),
            resolve: userPageResolver
        },

        boards: {
            type: new GraphQLList(BoardType),
            resolve: userBoardResolver
        }
    })
})

module.exports = UserType