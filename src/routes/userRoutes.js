const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');

router.post('/register',async(req,res) => {
    try{
        const usuario = await User.findOne({email: req.body.email});
        if(!usuario){
            const hash = bcrypt.hashSync(req.body.senha);
            await User.create({nome:req.body.nome,email:req.body.email,senha:hash});
            res.json({success:true,message:"Usuario cadastrado"})
        }else{  
            res.json({success:false,message:"Usuario ja cadastrado"})
        }
    }catch(err){
        res.json({success:false,erro:err.message})
    }
});

router.post('/login',async(req,res) => {
    try{
        const user = await User.findOne({email:req.body.email});
        if(user && bcrypt.compareSync(req.body.senha,user.senha)){
            const token = jwt.sign({id:user.id,email:user.email},"MinhaChaveSecreta",{expiresIn:"1h"});
            res.json({success:true,token:token,idUsuario:user._id});
        }else{
            res.json({success:false,message:"Usuario ou senha invalidos"})
        }
    }catch(err){
        res.json({success:false,erro:err.message})
    }
})

module.exports = router;