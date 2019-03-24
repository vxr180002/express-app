const express = require('express')
const app = express()
const port = 8080

var list = require('./routes/list')

app.use('/list', list)
app.get('/', (req, res) => res.send('hello world!'))

app.listen(port, () => console.log(`App listening on port ${port}`))