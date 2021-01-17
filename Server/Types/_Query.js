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

const QueryRoot = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        hello: {
            type: GraphQLString,
            resolve: helloResolver
        },

        users: {
            type: new GraphQLList(UserType),
            resolve: usersResolver
        },

        user: {
            type: UserType,
            args: { name: { type: GraphQLString } },
            resolve: userResolver
        }
    })
})

module.exports = QueryRoot