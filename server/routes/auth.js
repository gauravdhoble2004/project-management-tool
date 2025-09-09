const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

router.post('/register', async (req,res)=>{
  try{
    const {name,email,password} = req.body;
    if(!email||!password) return res.status(400).json({error:'Missing fields'});
    let user = await User.findOne({email});
    if(user) return res.status(400).json({error:'User exists'});
    const hashed = await bcrypt.hash(password, 10);
    user = new User({ name, email, password:hashed });
    await user.save();
    const token = jwt.sign({id:user._id}, process.env.JWT_SECRET || 'change_this_secret', {expiresIn:'7d'});
    res.json({user:{id:user._id,name:user.name,email:user.email,role:user.role}, token});
  }catch(e){ res.status(500).json({error:e.message}) }
});

router.post('/login', async (req,res)=>{
  try{
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(!user) return res.status(400).json({error:'Invalid credentials'});
    const ok = await bcrypt.compare(password, user.password);
    if(!ok) return res.status(400).json({error:'Invalid credentials'});
    const token = jwt.sign({id:user._id}, process.env.JWT_SECRET || 'change_this_secret', {expiresIn:'7d'});
    res.json({user:{id:user._id,name:user.name,email:user.email,role:user.role}, token});
  }catch(e){ res.status(500).json({error:e.message}) }
});

module.exports = router;
