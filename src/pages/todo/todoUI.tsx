// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Redirect } from 'wouter'
import useTask from '../../hook/useTask'
import { useUser } from '../../hook/useUser'
import GeneralLayout from '../../layout/general'
import { Task } from '../../types'
import Form from './components/form'
import ListTask from './components/listTask'

export default function TodoUI () {
  const { tasks, setTasks } = useTask()

  const { isLogged } = useUser()

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

  if (!isLogged) return <Redirect to='/'/>

  return <>
    <GeneralLayout>
        <div className='title'>
          <h1 >¡Bienvenido!</h1>
          <h4 >Control de Tareas</h4>
        </div>
        <Form handleSubmit={handleSubmit}/>
        <ListTask tasks={tasks} handleRemoveTask={handleRemoveTask}/>
     </GeneralLayout>
  </>
}
