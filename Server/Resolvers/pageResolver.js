const { Types } = require('mongoose')
// helper function to traverse object to containing page of interest
// might need something slightly diff for update/delete resolvers
const { pageModel, uModel } = require('../../DB/model.js')

const pageResolver = async (par, args) => await pageModel.findOne({ _id: args.id })

const addPageResolver = async (par, args) => {
//     title: { type: GraphQLNonNull(GraphQLString) },
//     rootID: { type: GraphQLString },
//     username: { type: GraphQLString }
    const newPage = new pageModel({ title: args.title })

    let root

    console.log('determining root.. with rootID:', args.rootID)


    try { root = await pageModel.findOne({ _id: args.rootID }) } 
    catch(e) { 
        console.log('error', e) 
        return e
    }

    root.pages.push(newPage._id) 

    try { await root.save() }
    catch(e) { 
        console.log('could not update root. error:', e)
        return e
    }

    try { await newPage.save() }
    catch(e) {
        console.log('could not save page. error:', e)
        return e
    }

    return root
}

const addPageResolverRoot = async (par, args) => {
    //     title: { type: GraphQLNonNull(GraphQLString) },
    //     rootID: { type: GraphQLString },
    //     username: { type: GraphQLString }

    const newPage = new pageModel({ title: args.title })

    let root = await uModel.findOne({ name: args.username })

    if (root) {
        root.pages.push(newPage._id) 

        try { await root.save() }
        catch(e) { 
            console.log('could not update root. error:', e)
            return e
        }

        try { await newPage.save() }
        catch(e) {
            console.log('could not save page. error:', e)
            return e
        }

    } else {
        console.log('root validates false:', root)
    }

    return root
}

const pagePageResolver = async (p, args) => await pageModel.find({ _id: { $in: [...p.pages] } })

const pageBoardResolver = (p, args) => p.boards

module.exports = {
    pageResolver,
    addPageResolver,
    addPageResolverRoot,

    pagePageResolver,
    pageBoardResolver
}