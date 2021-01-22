const { boardModel, pageModel, uModel } = require('../../DB/model.js')

const addBoardPageResolver = (p, args) => {
// add record to user, return user

// [0] build board record
    const newBoard = new boardModel({ title: args. title })

// [1] find page record & push board record
    const parent = pageModel.findOne({ _id: args.rootID })
// [1b] save page record
    parent.push(newBoard)
// [2] return page record
    return parent
}

const addBoardRootResolver = (p, args) => {
// add record to page, return page

// [0] build board record
    const newBoard = new boardModel({ title: args. title })
// [1] find user record & push board record
    const parent = uModel.findOne({ name: args.username })
// [1b] save user record
    parent.push(newBoard)
// [2] return user record
    return parent
}

export {
    addBoardPageResolver,
    addBoardRootResolver
}