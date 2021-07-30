/* eslint-disable no-use-before-define */
import React from 'react'

interface Props{
    children?:React.ReactNode
}

export default function GeneralLayout ({ children }:Props) {
  return <div className='container'>
    {children}
  </div>
}
