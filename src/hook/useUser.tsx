/* eslint-disable no-unused-vars */

import { useContext, useState } from 'react'
import useLocation from 'wouter/use-location'
import UserContext from '../context/userContext'
import { loginCredential, registerUser } from '../services/login'

interface LoginProps{
    email:string
    password:string
}

interface RegisterProps{
    user:string
    email:string
    passwordHash:string
}
export function useUser () {
  const { user, setUser, isLogged, setLogged }:any = useContext(UserContext)
  const [error, setError] = useState(false)
  const [, navigate] = useLocation()

  const HandleLogin = async ({ email, password }:LoginProps) => {
    try {
      const user = await loginCredential({ email, password })
      window.localStorage.setItem(
        'loggedAppUser', JSON.stringify(user)
      )
      setUser(user)
      setLogged(true)
      setError(false)
      navigate('/dashboard')
    } catch (error) {
      setError(true)
      console.log('Usuario no encontrado')
    }
  }
  const HandleRegister = async ({ user, email, passwordHash }:RegisterProps) => {
    try {
      const newUser = await registerUser({ user, email, passwordHash })
      window.localStorage.setItem(
        'loggedAppUser', JSON.stringify(newUser)
      )
      setUser(newUser)
      setLogged(true)
      setError(false)
      navigate('/dashboard')
    } catch (error) {
      setError(true)
      console.log('Usuario no Repetido')
    }
  }

  const handleLogOut = () => {
    setUser(null)
    setLogged(false)
    navigate('/')
    window.localStorage.removeItem('loggedAppUser')
  }
  return { user, HandleLogin, handleLogOut, isLogged, HandleRegister, error }
}
