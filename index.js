const express = require('express')
const app = express()
const path = '/api'

const mid = require('./middleware')

app.use(mid('hard stuff'))

app.use((req, res, next) => {
    console.log('First call..')
    next()
})

app.get('/customers/data', (req, res) => {
    res.send(`Customer data: ${req.query.info}; <br> from ${req.query.place}`)
})

app.post('/body', (req, res) => {
    let body = ''
    req.on('data', function(part){
        body += part
    })

    req.on('end', function() {
        res.send(body)
    })
})

app.get('/customers/:id', (req, res) => {
    res.send(`Customer = ${req.params.id}.`)
})

app.get(path, (request, response, next) => {
    response.json([
        {"name": "Arthur", "job": "Developer"},
        {"name": "John", "job": "Medic"},
        {"name": "Mary", "job": "CEO"}
    ])
    next()
    //response.send('<h1>Server Running</h1>')
})

app.use((req, res) => {
    console.log('Last call..')
})

app.listen(3000, () => {
    console.log('Express is now running...')
})