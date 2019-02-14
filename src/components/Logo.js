import React from 'react'
import styled from 'styled-components'
import FitImage from './utils/FitImage'
import { logo, colors } from './../styles/theme'
import { absoluteCentered } from './../styles/mixins'

export default props =>
  <LogoWrapper size={props.size || `6rem`}>
    <div className={'logo-wrapper'}>
      <FitImage src={logo}/>
    </div>
  </LogoWrapper>

const LogoWrapper = styled.div`
  width: ${props => props.size};
  height: ${props => props.size};
  display: block;
  position: relative;
  background-color: ${colors.black};
  border-radius: 50%;
  padding: .6rem;
  .logo-wrapper {
    ${absoluteCentered};
    width: 85%;
    height: 85%;
  }
`