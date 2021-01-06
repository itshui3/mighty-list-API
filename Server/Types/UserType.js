const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString
} = require('graphql')

const UserType = new GraphQLObjectType({
    name: 'UserType',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString }
    })
})

module.exports = UserType