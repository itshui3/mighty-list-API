// helper function to traverse object to containing page of interest
// might need something slightly diff for update/delete resolvers
const getCurPage = (nestSeq, curPage) => {
    nestSeq.forEach(id => {
        const idx = curPage.pages.map(page => page.id).indexOf(id)

        curPage = curPage.pages[idx]
    })

    return curPage
}

const pageResolver = (par, args) => getCurPage(args.id, par)

const addPageResolver = (par, args) => {
    const curPage = getCurPage(args.id, par)

    const newPage = {

    }

    return curPage
}

module.exports = {
    pageResolver,
    addPageResolver
}