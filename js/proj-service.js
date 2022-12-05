'use strict'

var gProjects


_createProjects()
function _createProjects() {
    gProjects = [
        _createProject('mine-sweeper', 'Mine Sweeper', `This game's the bomb !`, 'My very first big project, which was super fun and challenging', "https://harelsultan.github.io/Mine-Sweeper/", 1669316400000, ['Matrixes', 'Thinking game']),

        _createProject('book-shop', 'Books Shop', 'A necessary app for every books dealer', 'My very first big project, which was super fun and challenging', "https://harelsultan.github.io/Book-Shop/", 1670094000000, ['Shop managment', 'CRUDL App']),

        _createProject('touch-nums', 'Touch Nums', `A very hard game which requires some thinking`, 'My very first big project, which was super fun and challenging', "https://harelsultan.github.io/Touch-Nums/", 1668711600000, ['Matrixes', 'Thinking game']),

        _createProject('pacman', 'Pacman', `A true classic !`, 'My very first big project, which was super fun and challenging', "https://harelsultan.github.io/Pacman/", 1669057200000, ['Matrixes', 'Keyboard events']),
        _createProject('guess-who', 'Guess Who', `A very smart AI app who will read you mind`, 'My very first big project, which was super fun and challenging', "https://harelsultan.github.io/Guess-Me/", 1670266800000, ['AI', 'Responsive Layout']),
        _createProject('ball-game', 'Ball Game', `This game's the bomb !`, 'My very first big project, which was super fun and challenging', "https://harelsultan.github.io/Ball-Game/", 1669316400000, ['Matrixes', 'Keyboard events'])
    ]
}

function getProjects() {
    return gProjects
}

function getProjectById(id) {
    return gProjects.find(project => project.id === id)
}

function getFormattedTime(timeStamp) {
    const createdTime = new Date(timeStamp)
    const year = createdTime.getFullYear()
    const month = (createdTime.getMonth() + 1)
    return `Created At: ${year}-${month}`
}

function _createProject(id, name, title, desc, url, publishedAt, category) {
    return {
        id,
        name,
        title,
        desc,
        url,
        publishedAt,
        category
    }
}


