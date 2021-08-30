/* eslint-disable no-use-before-define */
import React from 'react'
import { Task } from '../../../types'

interface Props{
    tasks:Array<Task>
    handleRemoveTask: (id: string) => void
}

export default function ListTask ({ tasks, handleRemoveTask }:Props) {
  const renderList = () => {
    return tasks.map((task) => {
      if (!task.completed) {
        return (
        <div className='checkbox-container li-style' key={task.id}>
          <input type="checkbox" value={task.id} onClick={() => handleRemoveTask(task.id)}/>
          <div style={{ width: '10px' }}></div>
          <label>{task.task}</label>
        </div>
        )
      }
      return null
    }).reverse()
  }

  return <ul>
        {renderList()}
    </ul>
}
