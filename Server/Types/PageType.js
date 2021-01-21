const {
    GraphQLObjectType,
    GraphQLList,
    GraphQLInt,
    GraphQLID,
    GraphQLString
} = require("graphql")

const BoardType = require('./BoardType.js')

const PageType = new GraphQLObjectType({
    name: 'PageType',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },

        page: {
            type: new GraphQLList(PageType),
            args: { title: { type: GraphQLString } },
        },

        boards: {
            type: new GraphQLList(BoardType),
            resolve: (p, args) => {
                console.log('in boards resolver', p, p.boards)
                return p.boards
            }
        }
    })
})

module.exports = PageType