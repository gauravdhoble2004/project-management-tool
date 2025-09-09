const jwt = require('jsonwebtoken');
const User = require('../models/User');
module.exports = async function(req,res,next){
  const token = req.header('Authorization')?.replace('Bearer ','');
  if(!token) return res.status(401).json({error:'No token'});
  try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'change_this_secret');
    req.user = await User.findById(decoded.id).select('-password');
    next();
  }catch(e){ res.status(401).json({error:'Invalid token'}); }
}
