const mongoose = require('mongoose');

const Pedido = mongoose.model('pedidos',mongoose.Schema({
    produtos:{type:Array,required:true},
    total:{type:String,required:true},
    criadoEm:{type:Date,default:Date.now()},
    idUsuario:{type:String,required:true}
}))

module.exports = Pedido