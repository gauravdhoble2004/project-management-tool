import React, {useEffect,useState} from 'react'
import axios from 'axios'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
export default function Dashboard(){
  const [data, setData] = useState([{name:'Mon',tasks:5},{name:'Tue',tasks:8},{name:'Wed',tasks:6}])
  useEffect(()=>{ /* placeholder: load analytics from API */ },[])
  return (<div className='grid grid-cols-3 gap-6'><div className='col-span-2 bg-white p-6 rounded shadow'><h3 className='font-semibold mb-4'>Tasks over time</h3><ResponsiveContainer width='100%' height={250}><LineChart data={data}><XAxis dataKey='name'/><YAxis/><Tooltip/><Line type='monotone' dataKey='tasks' stroke='#8884d8'/></LineChart></ResponsiveContainer></div><div className='bg-white p-6 rounded shadow'>Quick Stats</div></div>)
}
