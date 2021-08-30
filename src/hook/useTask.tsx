/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react'
import TaskContext from '../context/taskContext'
import { getAllTask, sendTask, updateTask } from '../services/task'
import { TaskToSend } from '../types'
import { useUser } from './useUser'

const useTask = () => {
  const { tasks, setTasks }:any = useContext(TaskContext)
  const { user, isLogged } = useUser()

  useEffect(() => {
    isLogged
      ? getAllTask(user.token).then(setTasks)
      : setTasks([])
  }, [isLogged])

  const handleSubmit = (task:TaskToSend) => {
    sendTask({ token: user.token, task }).then((res) => {
      setTasks([...tasks, res])
    }).catch((e) => {
      console.log(e)
    })
  }

  const handleUpdate = (id:string) => {
    const newTodo = [...tasks]
    const todoFind = newTodo.find((todo) => todo.id === id)
    updateTask(todoFind).then((res) => {
      if (typeof todoFind !== 'undefined') {
        todoFind.completed = !todoFind.completed
      }
      setTasks(newTodo)
    }).catch((e) => {
      console.log(e)
    })
  }
  return { tasks, setTasks, handleSubmit, handleUpdate }
}

export default useTask
