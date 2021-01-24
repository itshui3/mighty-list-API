const { Types } = require('mongoose')

const { boardModel, pageModel, uModel } = require('../../DB/model.js')

const addBoardPageResolver = async (p, args) => {
// add record to user, return user

    console.log('in addBoardPageResolver')
    const newBoard = new boardModel({ title: args.title, tasks: '[]' })
    console.log(newBoard)

    try {

        const parent = await pageModel.findOne({ _id: args.rootID }) 
        console.log('parent page', parent)
        parent.boards.push(newBoard)
        await parent.save()
        return parent

    } catch(e) { return e }
}

const addBoardRootResolver = async (p, args) => {
// add record to page, return page

    const newBoard = new boardModel({ title: args.title, tasks: '[]' })

    try {
        const parent = await uModel.findOne({ name: args.username })
        parent.boards.push(newBoard)
        await parent.save()
        return parent
    } catch(e) { return e }
}

module.exports = {
    addBoardPageResolver,
    addBoardRootResolver
}