const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
  title:String,
  description:String,
  status:{type:String, default:'todo'}, // todo, doing, done
  assignee:{type:mongoose.Schema.Types.ObjectId, ref:'User', default:null},
  project:{type:mongoose.Schema.Types.ObjectId, ref:'Project'},
  start:Date,
  end:Date,
  comments:[{ author:{type:mongoose.Schema.Types.ObjectId, ref:'User'}, text:String, createdAt:{type:Date, default:Date.now} }]
}, { timestamps:true });
module.exports = mongoose.model('Task', TaskSchema);
