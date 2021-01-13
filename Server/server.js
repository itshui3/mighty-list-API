// init app
const app = require('express')()
const cors = require('cors')
app.use(cors())

const gqlSchema = require('./gqlSchema.js')
const { graphqlHTTP } = require('express-graphql')
// use graphql api app
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: gqlSchema
}))

module.exports = app