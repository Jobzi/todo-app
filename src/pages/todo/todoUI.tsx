// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react'
import { Redirect } from 'wouter'
import { useUser } from '../../hook/useUser'
import GeneralLayout from '../../layout/general'
import { getAllTask } from '../../services/task'
import { Task } from '../../types'
import Form from './components/form'
import ListTask from './components/listTask'
interface TodoAppState{
  information:Array<Task>
}

export default function TodoUI () {
  const [tasks, setTasks] = useState<TodoAppState['information']>([])
  const { user, isLogged } = useUser()

  const handleRemoveTask = (id:string) => {
    const newTodo = [...tasks]
    const todoFind = newTodo.find((todo) => todo.id === id)
    if (typeof todoFind !== 'undefined') {
      todoFind.completed = !todoFind.completed
    }
    setTasks(newTodo)
  }

  const handleSubmit = (newTask:Task) => {
    setTasks([...tasks, newTask])
  }

  useEffect(() => {
    if (isLogged) {
      getAllTask(user.token)
        .then(setTasks)
    }
  }, [])

  return <>
  {isLogged
    ? <GeneralLayout>
        <div className='title'>
          <h1 >¡Bienvenido!</h1>
          <h4 >Control de Tareas</h4>
        </div>
        <Form handleSubmit={handleSubmit}/>
        <ListTask tasks={tasks} handleRemoveTask={handleRemoveTask}/>
     </GeneralLayout>
    : <Redirect to='/'/>
}

  </>
}
