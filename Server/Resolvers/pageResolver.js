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

    const newPage = new pageModel({ title: args.title })
    let root

    const user = await uModel.findOne({ name: args.username })

    if (args.rootID) {
        root = await pageModel.findOne({ _id: args.rootID })
    } else {
        root = user
    }

    root.pages.push(newPage)

    await root.save()

    return user
}

module.exports = {
    pageResolver,
    addPageResolver
}