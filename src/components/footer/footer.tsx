/* eslint-disable no-use-before-define */
import React from 'react'
import { FooterStyled, ContainerStyled } from './footer.style'

interface Props{
    content?: string
}

function Footer ({ content }:Props) {
  return (
    <FooterStyled>
      <ContainerStyled>
        <span>
          {`${content}`}
          <a target="_blank" rel="noopener">
            TodoApp 📝
          </a>
        </span>
        <span>
          Developed by Jobzi • {' '}
          {new Date().getFullYear()} • {' '}
          <a href="https://github.com/Jobzi" target="_blank" rel="noreferrer">
            Github
          </a>
        </span>
      </ContainerStyled>
    </FooterStyled>
  )
}

export default Footer
