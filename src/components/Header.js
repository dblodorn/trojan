import React from 'react'
import styled from 'styled-components'
import { flexColumn } from './../styles/mixins'
import Navigation from './navigation'
import Socials from './navigation/Socials'
import HeaderPortal from './HeaderPortal'

export default () => 
  <HeaderPortal>
    <HeaderWrapper>
      <Navigation/>
      <Socials/>
    </HeaderWrapper>
  </HeaderPortal>

const HeaderWrapper = styled.div`
  ${flexColumn};
  top: 4rem;
  left: 2.5rem;
  width: 18rem;
  position: fixed;
  z-index: 9000;
`
