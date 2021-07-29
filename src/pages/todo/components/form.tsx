// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react'
import { Task } from '../../../types'
import '../todo.style.css'

interface Props{
    tasks:Array<Task>
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

export default function Form ({ tasks, setTasks }:Props) {
  const [newtask, setNewtask] = useState('')

  const handleSubmit = (evet : React.FormEvent<HTMLFormElement>) => {
    evet.preventDefault()
    setTasks([...tasks, { id: tasks.length + 1, task: newtask, date: '27-01-1996', completed: false }])
    setNewtask('')
  }

  const handleChange = (evet:React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evet.target
    setNewtask(value)
  }
  return (
        <form onSubmit={handleSubmit}>
            <input className="input" type='text' onChange={handleChange} value={newtask} placeholder='Tareas'/>
            <button className='button-style'>Agregar</button>
        </form>
  )
}
