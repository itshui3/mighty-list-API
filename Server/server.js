const { graphqlHTTP } = require('express-graphql')
const { 
    // a separate paradigm, try to understand this later
    buildSchema,
    // paradigm I'm comfortable with
    GraphQLSchema,
    GraphQLObjectType

} = require('graphql')

require('dotenv').config()

const app = require('express')()

const QueryRoot = require('./Types/_Query.js')

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: new GraphQLSchema({
        query: QueryRoot
    })

}))

module.exports = app