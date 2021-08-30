// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Redirect } from 'wouter'
import useTask from '../../hook/useTask'
import { useUser } from '../../hook/useUser'
import GeneralLayout from '../../layout/general'
import Form from './components/form'
import ListTask from './components/listTask'

export default function TodoUI () {
  const { tasks, handleSubmit, handleUpdate } = useTask()

  const { isLogged, user } = useUser()

  if (!isLogged) return <Redirect to='/'/>

  return <>
    <GeneralLayout>
      <div className='form-container'>
        <div className='title'>
          <h1 >¡Bienvenido! {user.user}</h1>
          <h4 >Control de Tareas</h4>
        </div>
        <Form handleSubmit={handleSubmit}/>
        <ListTask tasks={tasks} handleRemoveTask={handleUpdate}/>
      </div>
     </GeneralLayout>
  </>
}
