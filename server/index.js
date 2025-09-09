require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const projectRoutes = require('./routes/projects');
const taskRoutes = require('./routes/tasks');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO = process.env.MONGO_URI || 'mongodb://localhost:27017/pm_tool';

mongoose.connect(MONGO).then(()=>console.log('Mongo connected')).catch(e=>console.error(e));

app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);

app.get('/', (req,res)=>res.send({ ok:true, msg:'PM Tool API' }));

app.listen(PORT, ()=>console.log('Server running on',PORT));
