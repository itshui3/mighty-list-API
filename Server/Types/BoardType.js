const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString
} = require('graphql')

const BoardType = new GraphQLObjectType({
    name: 'BoardType',
    fields: () => ({
        id: { type: GraphQLInt },
        title: { type: GraphQLString },
        tasks: { type: GraphQLString }
    })

})

module.exports = BoardType