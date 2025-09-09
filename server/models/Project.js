const mongoose = require('mongoose');
const ProjectSchema = new mongoose.Schema({
  name:String,
  description:String,
  members:[{type:mongoose.Schema.Types.ObjectId, ref:'User'}]
}, { timestamps:true });
module.exports = mongoose.model('Project', ProjectSchema);
