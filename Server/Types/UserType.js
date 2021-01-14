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

const UserType = new GraphQLObjectType({
    name: 'UserType',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },

        pages: { 
            type: new GraphQLList(PageType),
            resolve: (p, args) => p.pages
        },

        page: {
            type: PageType,
            args: { id: {type: new GraphQLList(GraphQLID) } },
            resolve: pageResolver
        },

        boards: {
            type: new GraphQLList(BoardType),
            resolve: (p) => p.boards
        }
    })
})

module.exports = UserType