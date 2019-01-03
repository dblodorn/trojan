import React from 'react'
import styled from 'styled-components'
import FitImage from './utils/FitImage'
import { logo } from './../styles/theme'

export default props =>
  <LogoWrapper size={props.size || `6rem`}>
    <FitImage src={logo}/>
  </LogoWrapper>

const LogoWrapper = styled.div`
  width: ${props => props.size};
  height: ${props => props.size};
  display: block;
  position: relative;
`