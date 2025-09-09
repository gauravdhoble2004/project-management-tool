import React, {useState} from 'react'
import axios from 'axios'
export default function Login(){
  const [email,setEmail]=useState(''), [password,setPassword]=useState(''), [msg,setMsg]=useState('')
  async function submit(e){ e.preventDefault(); try{ const res=await axios.post('/api/auth/login',{email,password}); localStorage.setItem('token',res.data.token); setMsg('Logged in'); }catch(err){ setMsg(err.response?.data?.error||'Error') } }
  return (<div className='max-w-md mx-auto bg-white p-6 rounded shadow'><h2 className='text-xl mb-4'>Login</h2><form onSubmit={submit}><input className='w-full p-2 mb-2 border' placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)}/><input className='w-full p-2 mb-2 border' placeholder='Password' type='password' value={password} onChange={e=>setPassword(e.target.value)}/><button className='bg-blue-600 text-white px-4 py-2 rounded'>Login</button></form><div className='mt-2 text-sm'>{msg}</div></div>)
}
