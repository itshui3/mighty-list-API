const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} = require('graphql')

const PageType = require('./PageType.js')

const { pageResolver } = require('../Resolvers/pageResolver')

const UserType = new GraphQLObjectType({
    name: 'UserType',
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },

        pages: { 
            type: new GraphQLList(PageType),
        },

        page: { 
            type: PageType,
            args: { nestSeq: {type: new GraphQLList(GraphQLInt) } },
            resolve: pageResolver
        }
    })
})

module.exports = UserType