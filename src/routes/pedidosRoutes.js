const express = require('express');
const router = express.Router();
const login = require('../middleware/login');
const Pedido = require('../models/Pedido');
const { json } = require('body-parser');

router.get('/pedidos/:idUsuario',login,async(req,res) => {
    try {
        const pedidos = await Pedido.find({idUsuario:req.params.idUsuario});
        res.json(pedidos);
    } catch (error) {
        res.json({success:false,erro:error.message});
    }
});

router.post('/pedidos',async(req,res) => {
    try {
        const pedido = await Pedido.create({produtos:req.body.produtos,total:req.body.total,idUsuario:req.body.idUsuario});
        res.json(pedido);
    } catch (error) {
        res.json({success:false,erro:error.message});
    }
})



module.exports = router;