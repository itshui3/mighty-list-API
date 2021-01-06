const {
    GraphQLObjectType,
    GraphQLString,

    GraphQLList
} = require('graphql')

const {
    helloResolver,
    userResolver,
    usersResolver
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
    })
})

module.exports = QueryRoot