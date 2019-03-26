import React from 'react'
import styled from 'styled-components'
import FitImage from './utils/FitImage'
import { logo, colors } from './../styles/theme'
import { absoluteCentered } from './../styles/mixins'

export default props =>
  <LogoWrapper>
    <FitImage src={logo}/>
  </LogoWrapper>

const LogoWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`