const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Project = require('../models/Project');
const Task = require('../models/Task');

router.post('/', auth, async (req,res)=>{
  const p = new Project(req.body);
  await p.save();
  res.json(p);
});

router.get('/', auth, async (req,res)=>{
  const projects = await Project.find().populate('members','name email');
  res.json(projects);
});

router.get('/:id', auth, async (req,res)=>{
  const p = await Project.findById(req.params.id).populate('members','name email');
  if(!p) return res.status(404).json({error:'Not found'});
  const tasks = await Task.find({project:p._id}).populate('assignee','name email');
  res.json({project:p, tasks});
});

// simple analytics: tasks count by status
router.get('/:id/analytics', auth, async (req,res)=>{
  const agg = await Task.aggregate([
    { $match: { project: require('mongoose').Types.ObjectId(req.params.id) } },
    { $group: { _id: '$status', count: { $sum:1 } } }
  ]);
  res.json(agg);
});

module.exports = router;
