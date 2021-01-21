const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,

    GraphQLList
} = require('graphql')

const {
    helloResolver,
    userResolver,
    usersResolver,

    pageResolver
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

        // page: {
        //     type: 
        // }

    })
})

module.exports = QueryRoot