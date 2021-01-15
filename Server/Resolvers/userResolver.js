
const { uModel } = require('../../DB/model.js')

const usersResolver = async () => await uModel.find().then(allUsers => allUsers)

const userResolver = async (p, args) => await uModel.findOne({ name: args.name })


const addUserResolver = async (src, args) => {

    const newUser = new uModel({ name: args.name })

    await newUser.save()

    return newUser
}


module.exports = {
    usersResolver,
    userResolver,
    addUserResolver
}