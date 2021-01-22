
const { uModel, pageModel, boardModel } = require('../../DB/model.js')

const usersResolver = async () => await uModel.find().then(allUsers => allUsers)

const userResolver = async (p, args) => await uModel.findOne({ name: args.name })

const addUserResolver = async (p, args) => {
    const newUser = new uModel({ name: args.name })

    await newUser.save()

    return newUser
}

const userPageResolver = async (p, args) => await pageModel.find({ _id: { $in: [...p.pages] } })

const userBoardResolver = (p, args) => p.boards

module.exports = {
    usersResolver,
    userResolver,
    addUserResolver,
    // resolve embedded pages/boards
    userPageResolver,
    userBoardResolver
}