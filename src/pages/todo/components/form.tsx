// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Button from '../../../components/button/button'
import Input from '../../../components/Input'
import { Task } from '../../../types'

interface Props{
    handleSubmit:(newTask: Task) => void
}

export default function Form ({ handleSubmit }:Props) {
  const [newtask, setNewtask] = useState('')

  const handleFormSubmit = (evet : React.FormEvent<HTMLFormElement>) => {
    evet.preventDefault()
    handleSubmit({ id: uuidv4(), task: newtask, date: '27-01-1996', completed: false })
    setNewtask('')
  }

  const handleChange = (evet:React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evet.target
    setNewtask(value)
  }
  return (
        <form onSubmit={handleFormSubmit}>
            <Input type='text' onChange={handleChange} value={newtask} placeholder='Tareas'/>
            <Button loading={false} color='black' design='normal'>Agregar</Button>
        </form>
  )
}
