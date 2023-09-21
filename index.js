const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000

const urlUsers = 'https://jsonplaceholder.typicode.com/users';

app.get('/', async (req, res) => {
  const { data } = await axios.get(urlUsers);
  res.send(data);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})