const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Task = require('../models/Task');

router.post('/', auth, async (req,res)=>{ // create
  const t = new Task(req.body);
  await t.save();
  res.json(t);
});

router.put('/:id', auth, async (req,res)=>{
  const t = await Task.findByIdAndUpdate(req.params.id, req.body, { new:true });
  res.json(t);
});

router.get('/:id', auth, async (req,res)=>{
  const t = await Task.findById(req.params.id).populate('assignee','name email').populate('comments.author','name email');
  res.json(t);
});

router.delete('/:id', auth, async (req,res)=>{
  await Task.findByIdAndDelete(req.params.id);
  res.json({ ok:true });
});

// add comment
router.post('/:id/comments', auth, async (req,res)=>{
  const t = await Task.findById(req.params.id);
  t.comments.push({ author: req.user._id, text: req.body.text });
  await t.save();
  res.json(t);
});

module.exports = router;
