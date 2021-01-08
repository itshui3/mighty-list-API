

// const pageResolver = (p, args) => {
//     let bookmark = p.pages
//     let nestSeq = args.nestSeq

//     for (let i = 0; i < nestSeq.length; i++) {
//         bookmark = bookmark.pages.find(pg => pg.id === nestSeq[i])
//     }

//     return bookmark
// }

const pageResolver = (par, args) => {
    const nestSeq = args.id
    let curPage = par

    nestSeq.forEach((id) => {
        const idx = curPage.pages.map(page => page.id).indexOf(id)

        curPage = curPage.pages[idx]
    })

    return curPage
}

module.exports = {
    pageResolver
}