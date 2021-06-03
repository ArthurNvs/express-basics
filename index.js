const express = require('express')
const app = express()

app.get('/api', (request, response) => {
    response.json([
        {"name": "Arthur", "job": "Developer"},
        {"name": "John", "job": "Medic"}
    ])

    // response.json({
    //     "name": "Arthur",
    //     "job": "Developer"
    // })

    //response.send('<h1>Server Running</h1>')
})

app.listen(3000, () => {
    console.log('Express is now running...')
})