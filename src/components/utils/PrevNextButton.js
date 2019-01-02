import React from 'react'
import styled from 'styled-components'
import { buttonInit } from '../../styles/mixins'

const Button = styled.div`
  ${buttonInit};
  width: 2.75rem;
  height: 2.75rem;
  svg {
    opacity: 1;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const NextButton = props =>
  <Button>
    <svg version="1.1" viewBox="0 0 64 64" width="64" height="64">
      <g strokeLinecap="square" strokeLinejoin="miter" strokeWidth="3" transform="translate(0.5 0.5)" fill={props.color || `#ffffff`} stroke={props.color || `#ffffff`}>
        <polyline fill="none" stroke={props.color || `#ffffff`} strokeMiterlimit="10" points="18,4 46,32 18,60 "></polyline>
      </g>
    </svg>
  </Button>

const PrevButton = props =>
  <Button>
    <svg version="1.1" viewBox="0 0 64 64" width="64" height="64">
      <g strokeLinecap="square" strokeLinejoin="miter" strokeWidth="3" transform="translate(0.5 0.5)" fill={props.color || `#ffffff`} stroke={props.color || `#ffffff`}>
        <polyline fill="none" stroke={props.color || `#ffffff`} strokeMiterlimit="10" points="46,60 18,32 46,4 "></polyline>
      </g>
    </svg>
  </Button>

export {
  NextButton,
  PrevButton
}