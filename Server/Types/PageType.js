const { 
    GraphQLObjectType, 
    GraphQLList, 
    GraphQLInt,
    GraphQLString
} = require("graphql")

const PageType = new GraphQLObjectType({
    name: 'PageType',
    fields: () => ({
        id: { type: GraphQLInt },
        title: { type: GraphQLString },

        pages: { 
            type: new GraphQLList(PageType),
            resolve: (p, args) => {
                console.log('in pages resolver: [p, args]', `[${p}, ${args}]`)
            }
        },

        page: {
            type: PageType,
            args: { title: {type: GraphQLString} },
        }
    })
})

module.exports = PageType