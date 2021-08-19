
// eslint-disable-next-line no-use-before-define
import React, { createContext, useState } from 'react'

import { Task } from '../types'

export interface TodoAppState{
  tasks:Array<Task>
  setTasks:React.Dispatch<any>
}

const Context = createContext({} as TodoAppState)

export const TaskContextProvider: React.FC = ({ children }) => {
  const [tasks, setTasks] = useState<TodoAppState['tasks']>([])

  return <Context.Provider value ={{ tasks, setTasks }}>
      {children}
    </Context.Provider>
}

export default Context
