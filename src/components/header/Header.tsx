/* eslint-disable no-use-before-define */
import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'wouter'
import { useUser } from '../../hook/useUser'
import Pl from '../Plink'
import './header.style.css'

export default function Header () {
  const [toogleNav, setToogleNav] = useState(false)
  const { isLogged, handleLogOut } = useUser()
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)'
  })

  const desktopHeader = () => {
    return <>
    <header className='header'>
      <Link to='/'>
        <span style={{ cursor: 'pointer' }}>🎈</span>
      </Link>
      <nav className=''>
          <Link to='/dashboard'>
            <a>Dashboard</a>
          </Link>
      </nav>
      {!isLogged
        ? <nav>
            <Link to='/login'>
              <a>Log In</a>
            </Link>
            <Link to='/register'>
              <a className='black-button'>Sing Up</a>
            </Link>
          </nav>
        : <a className='black-button' onClick={handleLogOut}>Log Out</a>
        }
  </header>
  </>
  }
  const mobileOptions = () => {
    return (
    <div className='nav-style'>
      <Link to='/dashboard' onClick={toggleClick}>
        <Pl>Dashboard</Pl>
      </Link>
      {!isLogged
        ? <>
            <Link to='/login' onClick={toggleClick}>
              <Pl>Login</Pl>
            </Link>
            <Link to='/register' onClick={toggleClick}>
              <Pl>Register</Pl>
            </Link>
          </>
        : <Pl onClick={handleLogOut}>Log Out</Pl>
        }
    </div>
    )
  }
  const toggleClick = () => {
    console.log(toogleNav)
    setToogleNav((prev) => !prev)
  }
  const mobileHeader = () => {
    return (
    <>
      <header className='header-mobile'>
        <Link to="/"><span style={{ cursor: 'pointer' }}>🎈</span></Link>
        <span onClick={toggleClick}>🥃</span>
      </header>
      {toogleNav && mobileOptions()}
    </>
    )
  }
  return (
  <>
     {isMobile ? mobileHeader() : desktopHeader()}
  </>
  )
}
