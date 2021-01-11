const {
    GraphQLObjectType,

    GraphQLString
} = require('graphql')

const UserType = require('./UserType.js')
const user = require('../assets/users.js')

const MutationRoot = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        addUser: {
            type: UserType,
            args: { name: { type: GraphQLString } },
            resolve: (src, args) => {

                const username = args.name
                const userId = user.length

                const newUser = {
                    id: userId,
                    name: username,
                    pages: [],
                    boards: []
                }

                user.push(newUser)

                return user.find(user => user.id === userId)
            }
        }
    })
})

module.exports = MutationRoot