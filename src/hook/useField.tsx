/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const useFiled = (inputProps:any) => {
  const [value, setValue] = useState('')

  const onChange = ({ target }:React.ChangeEvent<HTMLInputElement>) => {
    setValue(target.value)
  }
  return {
    ...inputProps,
    value,
    onChange
  }
}
export default useFiled

/*
Usage
  const nameField = useFiled({ type: 'text', name: 'name' })
  <Input placeholder='Nombre Apellido' {...nameField}></Input>
*/
// onChange={({ target }) => setPassword(target.value)}
