const {
    GraphQLObjectType,

    GraphQLString
} = require('graphql')

const UserType = require('./UserType.js')
const { addUserResolver } = require('../Resolvers/userResolver')

const MutationRoot = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        addUser: {
            type: UserType,
            args: { name: { type: GraphQLString } },
            resolve: addUserResolver
        }
    })
})

module.exports = MutationRoot