// import gql assets
const { GraphQLSchema } = require('graphql')

// import schema Roots
const QueryRoot = require('./Types/_Query.js')
const MutationRoot = require('./Types/_Mutation.js')

// build schema
const gqlSchema = new GraphQLSchema({
    query: QueryRoot,
    mutation: MutationRoot
})

module.exports = gqlSchema