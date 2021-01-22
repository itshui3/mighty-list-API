const {
    GraphQLObjectType,

    GraphQLString,
    GraphQLNonNull,

    GraphQLList
} = require('graphql')

const UserType = require('./UserType.js')
const PageType = require('./PageType.js')
const { 
    addUserResolver, 
    addPageResolver,
    addPageResolverRoot
} = require('../Resolvers')

const MutationRoot = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        addUser: {
            type: UserType,
            args: { name: { type: GraphQLNonNull(GraphQLString) }},
            resolve: addUserResolver
        },

        addPage: {
            type: PageType,
            args: {
                username: { type: GraphQLNonNull(GraphQLString) },
                title: { type: GraphQLNonNull(GraphQLString) },
                rootID: { type: GraphQLString },
                // if null, assume nearest root is the user root
            },
            resolve: addPageResolver
        },

        addPageRoot: {
            type: UserType,
            args: {
                username: { type: GraphQLNonNull(GraphQLString) },
                title: { type: GraphQLNonNull(GraphQLString) },
                rootID: { type: GraphQLString },
                // if null, assume nearest root is the user root
            },
            resolve: addPageResolverRoot
        }
    })
})

module.exports = MutationRoot