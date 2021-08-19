/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import TaskContext from '../context/taskContext'
import { getAllTask } from '../services/task'
import { useUser } from './useUser'

const useTask = () => {
  const { tasks, setTasks }:any = useContext(TaskContext)
  const { user, isLogged } = useUser()

  useEffect(() => {
    isLogged
      ? getAllTask(user.token).then(setTasks)
      : setTasks([])
  }, [isLogged])

  return { tasks, setTasks }
}

export default useTask
