/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
    border: 1px inset grey;
    border-radius: 5px;
    margin: 0.5em;
    padding: 1em;
    font-size: large;
    &:focus {
       outline: none;
       border: 1px inset #529ef5;
    }
`

export default Input
