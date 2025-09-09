import React, { useState, useEffect } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import axios from 'axios'
export default function KanbanBoard({tasks:initialTasks=[], projectId}){
  const group = { todo:[], doing:[], done:[] }
  initialTasks.forEach(t=> group[t.status||'todo'].push(t))
  const [columns,setColumns]=useState(group)

  useEffect(()=>{ setColumns(group) },[initialTasks])

  async function onDragEnd(result){
    if(!result.destination) return
    const { source, destination } = result
    if(source.droppableId===destination.droppableId && source.index===destination.index) return
    const start = Array.from(columns[source.droppableId])
    const [moved] = start.splice(source.index,1)
    const end = Array.from(columns[destination.droppableId])
    moved.status = destination.droppableId
    end.splice(destination.index,0,moved)
    const newCols = { ...columns, [source.droppableId]: start, [destination.droppableId]: end }
    setColumns(newCols)
    // persist change
    try{ const token=localStorage.getItem('token'); await axios.put('/api/tasks/'+moved._id, moved, { headers:{ Authorization:'Bearer '+token }}); }catch(e){ console.error(e) }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className='flex gap-4'>
        {Object.keys(columns).map(key=>(
          <Droppable droppableId={key} key={key}>
            {(provided)=>(
              <div ref={provided.innerRef} {...provided.droppableProps} className='bg-white rounded p-4 w-80 shadow'>
                <h3 className='font-semibold capitalize'>{key}</h3>
                <div className='space-y-3 mt-3'>
                  {columns[key].map((task,idx)=>(
                    <Draggable draggableId={task._id} index={idx} key={task._id}>
                      {(prov)=>(
                        <div ref={prov.innerRef} {...prov.draggableProps} {...prov.dragHandleProps} className='p-3 bg-slate-50 rounded'>
                          <div className='text-sm font-medium'>{task.title}</div>
                          <div className='text-xs text-slate-500'>Assignee: {task.assignee?.name||'—'}</div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  )
}
