const {
    GraphQLObjectType,

    GraphQLString,
    GraphQLNonNull,

} = require('graphql')

const UserType = require('./UserType.js')
const PageType = require('./PageType.js')
const BoardType = require('./BoardType')

const { 
    addUserResolver, 
    addPageResolver,
    addPageResolverRoot,

    addBoardRootResolver,
    addBoardPageResolver,
    updateBoardResolver
    
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
        },

        addBoardRoot: {
            type: UserType,
            args: {
                username: { type: GraphQLNonNull(GraphQLString) },
                title: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve: addBoardRootResolver
        },

        addBoardPage: {
            type: PageType,
            args: {
                rootID: { type: GraphQLNonNull(GraphQLString) },
                title: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve: addBoardPageResolver
        },

        updateBoard: {
            type: BoardType,
            args: {
                username: { type: GraphQLNonNull(GraphQLString) },
                pgId: { type: GraphQLNonNull(GraphQLString) },
                boardId: { type: GraphQLNonNull(GraphQLString) },
                title: { type: GraphQLNonNull(GraphQLString) },
                tasks: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve: updateBoardResolver
        }

    })
})

module.exports = MutationRoot