var express = require('express')
var router = express.Router()

router.get('/', function(req, res){
    res.send('list all items')
})

router.get('/about', function(req, res){
    res.send('this will send all items that are fetched fomr mongo')
})

module.exports = router;