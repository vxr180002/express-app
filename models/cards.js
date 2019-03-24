const mongoose = require('mongoose')

var cardSchema = new mongoose.Schema({},{strict:false})
var cards = mongoose.model('cards', cardSchema);

module.exports = cards;
// app.get('/', (req, res) => {    
//     var Thing = mongoose.model('cards', cardSchema)
//     var response = Thing.findById(1);
//     res.send(response)
// });
