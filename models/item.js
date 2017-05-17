var mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String
});

module.exports = mongoose.model('Item', ItemSchema);
