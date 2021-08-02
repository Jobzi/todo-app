/* eslint-disable no-use-before-define */
import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'wouter'
import './header.style.css'

export default function Header () {
  const [toogleNav, setToogleNav] = useState<Boolean>(false)
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)'
  })

  const desktopHeader = () => {
    return <header className='header'>
            <Link to='/'>
              <span style={{ cursor: 'pointer' }}>🎈</span>
            </Link>
            <nav className=''>
                <Link to='/dashboard'>
                  <a>Dashboard</a>
                </Link>
            </nav>
            <nav>
              <Link to='/login'>
                <a>Log In</a>
              </Link>
              <Link to='/register'>
                <a className='black-button'>Sing Up</a>
              </Link>
            </nav>
        </header>
  }
  const mobileOptions = () => {
    return (
    <div className='nav-style'>
      <Link to='/dashboard' onClick={toggleClick}>
        Dashboard
      </Link>
      <Link to='/login' onClick={toggleClick}>
        Login
      </Link>
      <Link to='/register' onClick={toggleClick}>
        Register
      </Link>
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
