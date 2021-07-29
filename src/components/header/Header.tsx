/* eslint-disable no-use-before-define */
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'wouter'
import './header.style.css'

export default function Header () {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)'
  })

  const desktopHeader = () => {
    return <header className='header'>
            <Link to='/'>
              <span>🎈</span>
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

  const mobileHeader = () => {
    return <header className='header-mobile'>
            <Link to="/"><span>🎈</span></Link>
            <span>🥃</span>
        </header>
  }
  return (
  <>
     {isMobile ? mobileHeader() : desktopHeader()}
  </>
  )
}
