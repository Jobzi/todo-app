/* eslint-disable no-use-before-define */
import React from 'react'
interface Props{
  className?: 'container-grid'|'container-flex'
}
const GeneralLayout:React.FC<Props> = ({ className = 'container-grid', children }) => {
  return <div className={className}>
    {children}
  </div>
}

export default GeneralLayout
