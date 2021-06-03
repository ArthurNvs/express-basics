module.exports = (app, text) => {
    function save(req, res) {
        res.send('product -> save -> ' + text)
    }
    
    function getProduct(req, res) {
        res.send('product -> getProduct -> ' + text)
    }

    app.post('/product', save)
    app.get('/product', getProduct)

    return { save, getProduct }
}