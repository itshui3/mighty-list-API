const {
    GraphQLObjectType,
    GraphQLList,
    GraphQLInt,
    GraphQLString
} = require("graphql")

const BoardType = require('./BoardType.js')

const PageType = new GraphQLObjectType({
    name: 'PageType',
    fields: () => ({
        id: { type: GraphQLInt },
        title: { type: GraphQLString },

        pages: {
            type: new GraphQLList(PageType),
            resolve: (p, args) => {
                console.log('p.pages', p.pages)
                return p.pages
            }
        },

        page: {
            type: PageType,
            args: { title: {type: GraphQLString} },
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