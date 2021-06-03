function save(req, res) {
    res.send('User -> save')
}

function getUser(req, res) {
    res.send('User -> getUser')
}

module.exports = { save, getUser }