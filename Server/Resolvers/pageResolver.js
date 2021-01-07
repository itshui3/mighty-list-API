

const pageResolver = (p, args) => {
    let bookmark = p.pages
    let nestSeq = args.nestSeq

    for (let i = 0; i < nestSeq.length; i++) {
        bookmark = bookmark.pages.find(pg => pg.id === nestSeq[i])
    }

    return bookmark
}

module.exports = {
    pageResolver
}