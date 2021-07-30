/* eslint-disable no-use-before-define */
import React, { useState } from 'react'
import Button from '../../components/button/button'
import Input from '../../components/Input'
import GeneralLayout from '../../layout/general'

export default function RegisterUI () {
  const [loading, setloading] = useState(false)

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setloading(true)
    setTimeout(() => {
      setloading(false)
    }, 5000)
  }

  return (
    <GeneralLayout>
      <div className='form-container'>
      <h5>Únete a nosotros y mantén tus tareas bajo control</h5>
      <hr
        style={{
          color: 'black',
          backgroundColor: 'black',
          borderRadius: '20px',
          height: 5,
          width: '1em'
        }}
    />
      <form onSubmit={handleSubmit}>
        <div className='form-register'>
          <Input placeholder='Nombre Apellido'></Input>
          <Input placeholder='Correo'></Input>
          <Input placeholder='Contraseña'></Input>
          <Input placeholder='Repetir Contraseña'></Input>
        </div>
        <Button color='black' loadingColor='white' loading={loading} design='full' >Register</Button>
      </form>
      <p style={{ fontSize: '0.875rem' }}>Al registrarse, esta permitiendo el uso de sus datos proporcionados para que sean usados en la aplicación</p>
      </div>
    </GeneralLayout>
  )
}
