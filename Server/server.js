// import gql assets
const { graphqlHTTP } = require('express-graphql')
const { 
    // a separate paradigm, try to understand this later
    buildSchema,
    // paradigm I'm comfortable with
    GraphQLSchema,
    GraphQLObjectType

} = require('graphql')

// enable environment vars
require('dotenv').config()

// init app
const app = require('express')()

const cors = require('cors')

app.use(cors())

// import schema Roots
const QueryRoot = require('./Types/_Query.js')

// build schema
const Schema = new GraphQLSchema({
    query: QueryRoot
})

// use graphql api app
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: Schema
}))

module.exports = app