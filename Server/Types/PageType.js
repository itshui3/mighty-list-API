const {
    GraphQLObjectType,
    GraphQLList,
    GraphQLInt,
    GraphQLID,
    GraphQLString
} = require("graphql")

const BoardType = require('./BoardType.js')

const {
    // page embedded pages/board resolvers
    pagePageResolver,
    pageBoardResolver,
} = require('../Resolvers')

const PageType = new GraphQLObjectType({
    name: 'PageType',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },

        pages: {
            type: new GraphQLList(PageType),
            resolve: pagePageResolver,
        },

        boards: {
            type: new GraphQLList(BoardType),
            resolve: pageBoardResolver
        }
    })
})

// const UserType = new GraphQLObjectType({
//     name: 'UserType',
//     fields: () => ({
//         id: { type: GraphQLID },
//         name: { type: GraphQLString },

//         pages: { 
//             type: new GraphQLList(PageType),
//             resolve: userPageResolver
//         },

//         boards: {
//             type: new GraphQLList(BoardType),
//             resolve: userBoardResolver
//         }
//     })
// })

module.exports = PageType