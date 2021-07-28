/* eslint-disable no-use-before-define */
import React from 'react'
import { Task } from '../../../types'

interface Props{
    tasks:Array<Task>
}

export default function ListTask ({ tasks }:Props) {
  const renderList = () => {
    return tasks.map((task) => {
      return <li key={task.id}>{task.task}</li>
    }).reverse()
  }

  return <ul>
        {renderList()}
    </ul>
}
