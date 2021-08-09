// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react'
import GeneralLayout from '../../layout/general'
import { Task } from '../../types'
import Form from './components/form'
import ListTask from './components/listTask'

const INITIAL_VALUES:Array<Task> = [
  {
    id: 1,
    task: 'Hola Soy Una Tarea',
    date: '28-07-2021',
    completed: false
  }, {
    id: 2,
    task: 'Hola Soy Segunda Tarea',
    date: '28-07-2021',
    completed: false
  }
]

export default function TodoUI () {
  const [tasks, setTasks] = useState(INITIAL_VALUES)

  const handleRemoveTask = (id:number) => {
    setTasks(() => tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed }
      }
      return task
    }))
  }
  return (
     <GeneralLayout>
      <div className='title'>
          <h1 >¡Bienvenido!</h1>
          <h4 >Control de Tareas</h4>
        </div>
        <Form tasks={tasks} setTasks={setTasks}/>
        <ListTask tasks={tasks} handleRemoveTask={handleRemoveTask}/>
     </GeneralLayout>
  )
}
