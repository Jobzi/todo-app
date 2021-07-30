/* eslint-disable no-use-before-define */
import React, { useState } from 'react'
import Button from '../../components/button/button'
import Input from '../../components/Input'
import GeneralLayout from '../../layout/general'
export default function LoginUI () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submited, useSubmited] = useState(false)
  const handleSubmit = (evet:React.FormEvent<HTMLFormElement>) => {
    evet.preventDefault()
    console.log('Email:', email)
    console.log('password:', password)
    useSubmited(true)
    setTimeout(() => {
      useSubmited(false)
    }, 5000)
  }
  return (
    <GeneralLayout>
      <h3>Iniciar sesión</h3>
      <hr
        style={{
          color: 'black',
          backgroundColor: 'black',
          borderRadius: '20px',
          height: 5,
          width: '1em'
        }}
    />
      <form onSubmit={handleSubmit} className='form-login'>
        <Input
          type='text'
          value = {email}
          name='Email'
          placeholder='Email'
          onChange={({ target }) => setEmail(target.value)}
        />
        <Input
          type='password'
          value = {password}
          name='Password'
          placeholder='Password'
          onChange={({ target }) => setPassword(target.value)}
        />
        <Button color='black' loadingColor='white' loading={submited} design='normal' >Login</Button>
      </form>
    </GeneralLayout>
  )
}
