const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const app = express()
const { users } = require('./endpoints')
const port = 3000

// create application/json parser
app.use(bodyParser.json())

const usersHanndler = users({axios})

app.get('/', usersHanndler.get)
app.post('/', usersHanndler.post)
app.put('/:id', usersHanndler.put)
app.delete('/:id', usersHanndler.delete)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})