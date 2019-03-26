import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { flexColumn } from './../styles/mixins'
import Navigation from './navigation'

export default props => 
  <HeaderWrapper>
    <Navigation/>
  </HeaderWrapper>

const HeaderWrapper = styled.header`
  ${flexColumn};
  top: 5rem;
  left: 3rem;
  width: 22rem;
  position: fixed;
  z-index: 9000;
`
