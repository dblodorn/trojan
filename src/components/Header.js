import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { flexColumn } from './../styles/mixins'
import Navigation from './navigation'
import Socials from './navigation/Socials'

export default () => 
  <HeaderWrapper>
    <Navigation/>
    <Socials/>
  </HeaderWrapper>

const HeaderWrapper = styled.header`
  ${flexColumn};
  top: 4rem;
  left: 2.5rem;
  width: 18rem;
  position: fixed;
  z-index: 9000;
`
