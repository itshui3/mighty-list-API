const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLID, 
    GraphQLString
} = require('graphql')

const BoardType = new GraphQLObjectType({
    name: 'BoardType',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        tasks: { type: GraphQLString }
    })

})

module.exports = BoardType