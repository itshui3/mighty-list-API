const {
    GraphQLObjectType,

    GraphQLString,
    GraphQLNonNull
} = require('graphql')

const UserType = require('./UserType.js')
const { addUserResolver } = require('../Resolvers/userResolver')

const MutationRoot = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        addUser: {
            type: UserType,
            args: { 
                name: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve: addUserResolver
        }
    })
})

module.exports = MutationRoot