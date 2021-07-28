// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react'
import { Task } from '../../types'
import Form from './components/form'
import ListTask from './components/listTask'
import './todo.styles.css'

const INITIAL_VALUES:Array<Task> = [{
  id: 1,
  task: 'Hola Soy Una Tarea',
  date: '28-07-2021'
}, {
  id: 2,
  task: 'Hola Soy Segunda Tarea',
  date: '28-07-2021'
}]

export default function TodoUI () {
  const [tasks, setTaks] = useState(INITIAL_VALUES)

  return (
     <>
        <h1 className='title' >¡Bienvenido! Control de Tareas</h1>
        <div className='container'>
            <Form tasks={tasks} setTasks={setTaks}/>
            <ListTask tasks={tasks}/>
        </div>
     </>
  )
}
