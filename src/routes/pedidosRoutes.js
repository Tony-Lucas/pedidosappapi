const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

router.get('/pedidos',login,async(req,res) => {
    console.log("Area Privada")
});



module.exports = router;