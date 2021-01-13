const users = require('../assets/users.js')
const { userModel } = require('../../DB/model.js')

const usersResolver = () => userModel.find().then(allUsers => allUsers)

const userResolver = (p, args) => {
    console.log('in userResolver')
    return users.find((user) => user.name === args.name)
}

// parse this data next poma
// [0] check parse-thru below
// [1] check atlas to see if data is persist
const addUserResolver = (src, args) => {
    console.log('in addUserResolver')

    const username = args.name

    const newUser = new userModel({ name: username, pages: [], boards: [] })
    console.log(newUser)

    return newUser.save().then(user => {
        console.log('response user(?) in .save', user)

        return user
    })
}


module.exports = {
    usersResolver,
    userResolver,
    addUserResolver
}