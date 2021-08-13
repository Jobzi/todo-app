/* eslint-disable no-use-before-define */
import React from 'react'
import { Redirect } from 'wouter'
import { useUser } from '../../hook/useUser'
import GeneralLayout from '../../layout/general'

export default function IndexUI () {
  // const { VITE_HOST: name } = import.meta.env
  const { isLogged } = useUser()
  return <>
    {!isLogged
      ? <GeneralLayout className='container-flex'>
          <h1 className='style-text'>Hola, Te Estaba Esperando</h1>
        </GeneralLayout>
      : <Redirect to='/dashboard'/>}
  </>
}
