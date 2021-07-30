/* eslint-disable no-use-before-define */

import React from 'react'
import styled from 'styled-components'
import Loader from '../Loader'

interface Props{
  color?:string
  loading?:boolean
  loadingColor?:string
  design?: 'normal'|'compact'|'full'
  onClick?: () => void
  children?:React.ReactNode
}

type StyleProps = Omit<Props, 'children'|'onClick'>

function Button ({ color = 'blue', loading = false, design = 'normal', loadingColor, children, ...props }:Props) {
  return (
    <ButtonStyled color={color} loading={loading} design={design} {...props}>
      {loading ? <Loader size={25} loadingColor={loadingColor}/> : children }
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button<StyleProps>`
  font-size: x-large;
  margin: 0.5em;
  padding: 0.5em;
  border-radius: 0.375em;
  background: ${({ color }) => color};
  color: white;
  user-select: none;
  width: ${({ design }) => design === 'full' ? DESIGN[design] : 'auto'};
  cursor: ${({ loading }) => loading ? 'not-allowed' : 'pointer'}
`

const DESIGN = {
  normal: '0.75rem 2rem',
  compact: '0.5rem 1.5rem',
  full: '95%'
}

export default Button
