const mongoose = require('mongoose');

const User = mongoose.model('users',mongoose.Schema({
    nome:{type:String,required:true},
    email:{type:String,required:true},
    senha:{type:String,required:true}
}));

module.exports = User;