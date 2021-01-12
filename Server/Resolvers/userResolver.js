const users = require('../assets/users.js')
const { userModel } = require('../../DB/model.js')

const usersResolver = () => users
const userResolver = (p, args) => {
    console.log('in userResolver')
    return users.find((user) => user.name === args.name)
}

const addUserResolver = (src, args) => {
    console.log('in addUserResolver')

    const username = args.name
    const userId = users.length

    // parse shit below vvv into mongoose model
    // const newUser = {
    //     id: userId,
    //     name: username,
    //     pages: [],
    //     boards: []
    // }

    // users.push(newUser)

    // return users.find(user => user.id === userId)
}


module.exports = {
    usersResolver,
    userResolver,
    addUserResolver
}