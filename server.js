const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const app = express()
const { posts } = require('./endpoints')
const { authenticate } = require('./middlewares')
const port = 3000

// create application/json parser
app.use(bodyParser.json())

const postsHanndler = posts({axios})

app.post('/', authenticate, postsHanndler.post)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})