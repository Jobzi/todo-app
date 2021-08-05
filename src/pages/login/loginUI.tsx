/* eslint-disable no-use-before-define */
import React, { useState } from 'react'
import Button from '../../components/button/button'
import Input from '../../components/Input'
import { useUser } from '../../hook/useUser'
import GeneralLayout from '../../layout/general'
export default function LoginUI () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submited, useSubmited] = useState(false)
  const { HandleLogin } = useUser()

  const handleSubmit = async (evet:React.FormEvent<HTMLFormElement>) => {
    evet.preventDefault()
    console.log('Email:', email)
    console.log('password:', password)
    useSubmited(true)
    try {
      await HandleLogin({ email, password })
      setEmail('')
      setPassword('')
      useSubmited(false)
    } catch (error) {
      console.error('ERROR WITH AUTH')
    }
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
