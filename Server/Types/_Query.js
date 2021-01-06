const {
    GraphQLObjectType,
    GraphQLString
} = require('graphql')

const {
    resolveHello
} = require('../Resolvers')

const QueryRoot = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        hello: {
            type: GraphQLString,
            resolve: resolveHello
        }
    })
})

module.exports = QueryRoot