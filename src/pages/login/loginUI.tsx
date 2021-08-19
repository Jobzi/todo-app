/* eslint-disable no-use-before-define */
import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import Button from '../../components/button/button'
import Input from '../../components/Input'
import InputField from '../../components/InputField'
import { useUser } from '../../hook/useUser'
import GeneralLayout from '../../layout/general'
interface Inputs {
  email: string,
  password: string,
};

export default function LoginUI () {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({ defaultValues: { email: '', password: '' } })
  const { HandleLogin, error } = useUser()
  const [loading, setLoading] = useState(false)

  const onSubmit:SubmitHandler<Inputs> = data => {
    const { email, password } = data
    setLoading(true)
    HandleLogin({ email, password })
      .then(() => setLoading(false))
      .catch(() => setLoading(false))
  }
  return (
    <GeneralLayout>
      <h3>Iniciar sesión</h3>
      <hr style={{
        color: 'black',
        backgroundColor: 'black',
        borderRadius: '20px',
        height: 5,
        width: '1em'
      }}/>
      <form onSubmit={handleSubmit(onSubmit)} className='form-login'>
        <InputField>
          <Input
            type='text'
            placeholder='Email'
            {...register('email', { required: true })}
          />
          {errors.email && <span className="error-message">El campo correo es requerido</span>}
        </InputField>
        <InputField>
          <Input
            type='password'
            placeholder='Contraseña'
            {...register('password', { required: true })}
            />
          {errors.password && <span className="error-message">El campo contraseña es requerido</span>}
        </InputField>
        <Button color='black' loadingColor='white' loading={loading} design='normal' >Login</Button>
      </form>
        {error && <span className="error-message">CORREO o CONTRASEÑA INCORRECTOS</span>}
    </GeneralLayout>
  )
}
