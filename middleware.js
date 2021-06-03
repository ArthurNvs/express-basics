function middleware(stuff) {
    return function(req, res, next) {
        console.log(`doing some middleware stuff: ${stuff}!`)
        next()
    }
}

module.exports = middleware