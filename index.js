const express = require('express')
const app = express()
const path = '/api'

app.use((req, res, next) => {
    console.log('First call..')
    next()
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