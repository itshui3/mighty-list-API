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

    const newPage = new pageModel({ title: args.title })

    let root

    const user = await uModel.findOne({ name: args.username })

    console.log('determining root.. with rootID:', args.rootID)
    if (args.rootID && args.rootID.length > 0) {
        // pageModel can't fetch
        try { root = await pageModel.findOne({ _id: args.rootID }) } catch(e) { console.log('error', e) }

    } else {
        root = user
    }

    if (root) {
        root.pages.push(newPage) 

        try { await root.save() }
        catch(e) { console.log('could not save newPage. error:', e)}
    } else {
        console.log('root validates false:', root)
    }

    return user
}

module.exports = {
    pageResolver,
    addPageResolver
}