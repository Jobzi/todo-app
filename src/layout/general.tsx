/* eslint-disable no-use-before-define */
import React from 'react'

const GeneralLayout:React.FC = ({ children }) => {
  return <div className='container'>
    {children}
  </div>
}

export default GeneralLayout
