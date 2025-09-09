import React, {useEffect,useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
export default function Projects(){
  const [projects,setProjects]=useState([])
  useEffect(()=>{ async function load(){ try{ const token=localStorage.getItem('token'); const res=await axios.get('/api/projects',{ headers: { Authorization: 'Bearer '+token } }); setProjects(res.data); }catch(e){ /* ignore */ } } load() },[])
  return (<div><div className='flex justify-between items-center mb-4'><h2 className='text-2xl'>Projects</h2></div><div className='grid grid-cols-3 gap-4'>{projects.map(p=>(<Link to={'/projects/'+p._id} key={p._id} className='bg-white p-4 rounded shadow'>{p.name}</Link>))}</div></div>)
}
