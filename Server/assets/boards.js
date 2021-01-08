
// [0] exercises
const exerciseBoard = {

    title: 'Exercises',
    tasks: JSON.stringify([
        {
            name: 'Stretches',
            todos: ['child\'s pose', 'infinity hover']
        }
    ])
}
// [1] diet
const dietBoard = {

    title: 'Dietary Habits',
    tasks: JSON.stringify([
        {
            name: 'Drink Plenty of Water!',
            todos: ['Once after morning shower', 'once every 2 hours refill']
        }
    ])
}

// [2]
const taskBoard = {

    title: 'Today\'s Tasks',
    tasks: JSON.stringify([
        {
            name: 'Project Work!',
            todos: ['Plan', 'Think about where I\'m at', 'Pick out a piece I can build!']
        }
    ])
}

// [3] nested in health_resources
const dietLinksBoard = {

    title: 'Diet Links',
    tasks: JSON.stringify([])
}

module.exports = { 
    exerciseBoard, 
    dietBoard, 
    taskBoard, 
    dietLinksBoard 
}