import React, {useEffect,useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import KanbanBoard from '../shared/KanbanBoard'
import GanttAddon from '../shared/GanttAddon'

export default function ProjectView(){
  const {id} = useParams()
  const [project,setProject]=useState(null)
  const [tasks,setTasks]=useState([])
  useEffect(()=>{ async function load(){ try{ const token=localStorage.getItem('token'); const res=await axios.get('/api/projects/'+id, { headers:{ Authorization:'Bearer '+token }}); setProject(res.data.project); setTasks(res.data.tasks); }catch(e){ } } load() },[id])
  return (<div className='space-y-6'><h2 className='text-2xl font-semibold'>{project?.name||'Project'}</h2><div className='grid grid-cols-3 gap-6'><div className='col-span-2'><KanbanBoard tasks={tasks} projectId={id} /></div><div><div className='bg-white p-4 rounded shadow'>Project Analytics</div><div className='mt-4 bg-white p-4 rounded shadow'><GanttAddon tasks={tasks} /></div></div></div></div>)
}
