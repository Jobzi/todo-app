/* eslint-disable no-use-before-define */
import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import Button from '../../components/button/button'
import Input from '../../components/Input'
import InputField from '../../components/InputField'
import { useUser } from '../../hook/useUser'
import GeneralLayout from '../../layout/general'
import './register.style.css'

interface Inputs {
  fullName: string,
  email: string,
  password: string,
  passwordRepeated:string
};

const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g
const PASSWORD_REGEX = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/
const PASSWORD_OPTIONS = {
  minLength: {
    value: 8,
    message: 'Contraseña debe ser mayor a 8 caracteres'
  },
  required: {
    value: true,
    message: 'El campo es requerido'
  },
  pattern: {
    value: PASSWORD_REGEX,
    message: 'Contraseña no segura'
  }
}

export default function RegisterUI () {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>()
  const [loading, setloading] = useState<boolean>(false)
  const watchPassword = watch('password', '')
  const { HandleRegister, error } = useUser()

  const onSubmit: SubmitHandler<Inputs> = data => {
    const { fullName: user, password: passwordHash, email } = data
    setloading(true)
    HandleRegister({ user, email, passwordHash }).then(() => setloading(false))
  }

  return (
    <GeneralLayout>
      <div className='form-container'>
      <h5>Únete a nosotros y mantén tus tareas bajo control</h5>
      <hr style={{
        color: 'black',
        backgroundColor: 'black',
        borderRadius: '20px',
        height: 5,
        width: '1em'
      }}/>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-register'>
          <InputField>
            <Input type="text" autoComplete='off' placeholder='Nombre Apellido' {...register('fullName', { required: true })}></Input>
            {errors.fullName && <span className="error-message">El campo usuario es requerido</span>}
          </InputField>
          <InputField>
            <Input type="email" placeholder="Correo" {...register('email', { required: true, pattern: EMAIL_REGEX })} />
            {errors.email && <p className="error-message">El campo email es requerido</p>}
          </InputField>
          <InputField>
            <Input type="password" autoComplete='off' placeholder='Contraseña' {...register('password', PASSWORD_OPTIONS) }></Input>
            {errors.password && <p className="error-message">{errors.password.message}</p>}
          </InputField>
          <InputField>
            <Input type="password" placeholder='Repetir Contraseña' {...register('passwordRepeated', {
              required: true,
              validate: {
                equal: v => v === watchPassword
              }
            })}></Input>
            {errors.passwordRepeated && <p className="error-message">No coinciden las contraseñas</p>}
          </InputField>
        </div>
        <Button color='black' loadingColor='white' loading={loading} design='full' >Register</Button>
      </form>
      <p style={{ fontSize: '0.875rem' }}>Al registrarse, esta permitiendo el uso de sus datos proporcionados para que sean usados en la aplicación</p>
      {error && <p className="error-message">¡UPS!. Registro invalido intente nuevamente</p>}
      </div>
    </GeneralLayout>
  )
}
