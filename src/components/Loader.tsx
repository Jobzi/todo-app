/* eslint-disable no-use-before-define */
import React from 'react'
import styled, { keyframes } from 'styled-components'

interface Props{
  size: number
  loadingColor?:string
}

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const LoaderStyled = styled.div<Props>`
  width: ${({ size }) => `${size}`}px;
  height: ${({ size }) => `${size}`}px;
  border-radius: 50%;
  background-color: transparent;
  border: ${({ size }) => 0.125 * size}px solid rgba(0,0,0,0.32) ;
  border-left-color: ${({ loadingColor }) => loadingColor};
  margin: 0 auto;
  animation: ${rotate} 1.5s ease infinite;
`

export default function Loader ({ size = 20, loadingColor = 'red' }:Props) {
  return (
    <LoaderStyled size={size} loadingColor={loadingColor}/>
  )
}
