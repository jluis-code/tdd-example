const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const app = express()
const port = 3000

// create application/json parser
app.use(bodyParser.json())

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const urlUsers = 'https://jsonplaceholder.typicode.com/users';

app.get('/', async (req, res) => {
  const { data } = await axios.get(urlUsers);
  res.send(data);
})

app.post('/', async (req, res) => {
   console.log(req.body)
   res.sendStatus(200);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})