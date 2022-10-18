let mongoose = require('mongoose');

// create a model class
let userModel = mongoose.Schema({
    name : String,
    email : String,
    number : Number
},
    {
        collection: "user_collect"
    }

);

module.exports = mongoose.model('User', userModel);