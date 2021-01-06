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

// const { Query } = require('./Types')

app.use('/graphql', graphqlHTTP({
    graphiql: true,

}))

app.listen(process.env.PORT, () => {
    console.log(`Service listening on port: ${process.env.PORT}`)
})