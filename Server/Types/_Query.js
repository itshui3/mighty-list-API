const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,

    GraphQLList
} = require('graphql')

const {
    userResolver,

    pageResolver,
} = require('../Resolvers')

const UserType = require('./UserType.js')
const PageType = require('./PageType')

const QueryRoot = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({

        user: {
            type: UserType,
            args: { name: { type: GraphQLString } },
            resolve: userResolver
            // resolve user & pages/boards on user level
        },

        page: {
            type: PageType,
            args: { id: { type: GraphQLString } },
            resolve: pageResolver
        }

    })
})

module.exports = QueryRoot