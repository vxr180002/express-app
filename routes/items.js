var express = require('express')
var router = express.Router()
const Cards = require('../models/cards')

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

router.get('/', function(req, res){
    Cards.findOne({'is_deleted':false}).exec(function(err, card){
        console.log(card.get('email'));
        res.json(card);
    });
})

router.get('/about', function(req, res){
    var response = Cards.findById(1).exec();
    res.send(response)
})

module.exports = router;