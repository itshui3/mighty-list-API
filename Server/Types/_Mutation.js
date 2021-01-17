const {
    GraphQLObjectType,

    GraphQLString,
    GraphQLNonNull
} = require('graphql')

const UserType = require('./UserType.js')
const PageType = require('./PageType.js')
const { addUserResolver, addPageResolver } = require('../Resolvers')

const MutationRoot = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        addUser: {
            type: UserType,
            args: { 
                name: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve: addUserResolver
        },

        addPage: {
            type: UserType,
            args: {
                username: { type: GraphQLString },
                title: { type: GraphQLNonNull(GraphQLString) },
                rootID: { type: GraphQLString },
                // if null, assume nearest root is the user root
            },
            resolve: addPageResolver
        }
    })
})

module.exports = MutationRoot