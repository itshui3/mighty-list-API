// helper function to traverse object to containing page of interest
// might need something slightly diff for update/delete resolvers
const { pageModel, uModel } = require('../../DB/model.js')

const getCurPage = (nestSeq, curPage) => {
    nestSeq.forEach(id => {
        const idx = curPage.pages.map(page => page.id).indexOf(id)

        curPage = curPage.pages[idx]
    })

    return curPage
}

const pageResolver = (par, args) => getCurPage(args.id, par)

const addPageResolver = async (par, args) => {
//     title: { type: GraphQLNonNull(GraphQLString) },
//     rootID: { type: GraphQLString },
//     username: { type: GraphQLString }
    console.log('in addPageResolver')

    console.log('constructing page')
    const newPage = new pageModel({ title: args.title })
    console.log(newPage)
    let root

    console.log('searching for user..')
    const user = await uModel.findOne({ name: args.username })
    console.log(user)

    console.log('determining root..')
    if (args.rootID && args.rootID.length > 0) {
        root = await pageModel.findOne({ _id: args.rootID })
    } else {
        root = user
    }

    console.log(root)
    root.pages.push(newPage)

    console.log('saving page')
    await root.save()

    return user
}

module.exports = {
    pageResolver,
    addPageResolver
}