// helper function to traverse object to containing page of interest
// might need something slightly diff for update/delete resolvers
const { pageModel, uModel } = require('../../DB/model.js')

// const getCurPage = (nestSeq, curPage) => {
//     nestSeq.forEach(id => {
//         const idx = curPage.pages.map(page => page.id).indexOf(id)

//         curPage = curPage.pages[idx]
//     })

//     return curPage
// }

const pageResolver = async (par, args) => await pageModel.findOne({ _id: args.id })

const addPageResolver = async (par, args) => {
//     title: { type: GraphQLNonNull(GraphQLString) },
//     rootID: { type: GraphQLString },
//     username: { type: GraphQLString }
    const newPage = new pageModel({ title: args.title })

    let root

    console.log('determining root.. with rootID:', args.rootID)
    if (args.rootID && args.rootID.length > 0) {

        try { root = await pageModel.findOne({ _id: args.rootID }) } 
        catch(e) { 
            console.log('error', e) 
            return e
        }

    } else {
        try { root = await uModel.findOne({ name: args.username }) }
        catch(e) {
            console.log('error locating user object', e)
            return e
        }
    }

    if (root) {
        root.pages.push(newPage) 

        try { await root.save() }
        catch(e) { 
            console.log('could not save newPage. error:', e)
            return e
        }
    } else {
        console.log('root validates false:', root)
    }

    return newPage
}

const pagePageResolver = async (p, args) => await pageModel.find({ _id: { $in: [...p.pages] } })

const pageBoardResolver = (p, args) => p.boards

module.exports = {
    pageResolver,
    addPageResolver,

    pagePageResolver,
    pageBoardResolver
}