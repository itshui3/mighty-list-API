const {
    exerciseBoard, 
    dietBoard, 
    taskBoard, 
    dietLinksBoard 
} = require('./boards.js')

const SpaghettiPages = {
    id: 4,
    title: 'Spaghetti',
    pages: [],
    boards: []
}

const DietPages = {
    id: 3,
    title: 'Diet',
    pages: [SpaghettiPages],
    boards: [dietBoard]
}

const HealthPages = {
    id: 1,
    title: 'Health',
    pages: [DietPages],
    boards: []
}

const ResearchPages = {
    id: 2,
    title: 'Research',
    pages: [],
    boards: []
}

const huiPages = [
    HealthPages,
    ResearchPages
]


module.exports = { huiPages }