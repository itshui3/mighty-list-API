const users = require('../assets/users.js')
const { uModel } = require('../../DB/model.js')

const usersResolver = async () => await uModel.find().then(allUsers => allUsers)

const userResolver = async (p, args) => await uModel.findOne({ name: args.name })


const addUserResolver = async (src, args) => {

    const username = args.name
    const newUser = new uModel({ name: username })

    // 1.14.21 ***
    // user is saving, but in attempting to return info to client
    // client isn't able to parse it displays this error: 

    // "Unhandled Rejection (Error): Cannot read property 'catch' of undefined"

    // seems like newUser.save().then().catch()
    // when I remove .catch() block it fixes this issue

    // [0] clean - up clientside render, logic looks jank af
    // [1] see what the data looks like coming back to FE

    await newUser.save()

    return newUser
}


module.exports = {
    usersResolver,
    userResolver,
    addUserResolver
}