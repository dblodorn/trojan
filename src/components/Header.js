import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Logo from './Logo'
import { flexCenteredAll, buttonInit } from './../styles/mixins'

const Header = props => {
  if (props.resizeState.window_width >= props.resizeState.breakpoints.desktop) {
    return <LogoWrapper to={'/'}><Logo size={`100%`} /></LogoWrapper>
  } else {
    return <HeaderWrapper></HeaderWrapper>
  }
}

export default connect(
  state => ({
    resizeState: state.resizeState
  })
)(Header)

const HeaderWrapper = styled.header`
  ${flexCenteredAll};
  width: 100vw;
  height: 10rem;
  position: fixed;
  top: 0;
  left: 0;
`

const LogoWrapper = styled(Link)`
  ${buttonInit};
  width: 18rem;
  height: 18rem;
  position: fixed;
  top: 2rem;
  left: 2rem;
  transform: rotate(0deg);
  transition: transform 250ms ease-in-out;
  will-change: transform;
  &:hover {
    transform: rotate(10deg);
  }
`