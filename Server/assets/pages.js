const DietPages = {
    id: 3,
    title: 'Diet',
    pages: [],
    boards: []
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

const huiPages = {
    id: 0,
    title: 'Root',

    pages: [
        HealthPages,
        ResearchPages
    ],
    
    boards: []
}

module.exports = { huiPages }