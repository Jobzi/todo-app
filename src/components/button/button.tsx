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

const defaultProps:Props = {
  color: 'blue',
  loading: false,
  design: 'normal'
}

type StyleProps = Omit<Props, 'children'|'onClick'>

const Button:React.FC<Props> = ({ color, loading, design, loadingColor, children, ...props }: typeof defaultProps) => {
  return (
    <ButtonStyled color={color} design={design} {...props}>
      {/* loading={loading} => Problemas con style components props */}
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
