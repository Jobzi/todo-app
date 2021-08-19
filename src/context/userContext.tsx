/* eslint-disable no-use-before-define */
import React, { createContext, useEffect, useState } from 'react'

interface User{
  user:string
  email:string
  token:string
}

export interface UserContextProps{
    user?:User|null
    setUser?:React.Dispatch<any>
    isLogged:boolean
    setLogged: React.Dispatch<React.SetStateAction<boolean>>
}

const Context = createContext<UserContextProps | {}>({})

export const UserContextProvider:React.FC = ({ children }) => {
  const [isLogged, setLogged] = useState(false)
  const [user, setUser] = useState(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (loggedUserJSON) {
      setLogged(true)
      return JSON.parse(loggedUserJSON)
    }
    return null
  })

  useEffect(() => {
    console.info(user)
  }, [user])

  return <Context.Provider value={ { user, setUser, isLogged, setLogged } }>
        {children}
      </Context.Provider>
}

export default Context
