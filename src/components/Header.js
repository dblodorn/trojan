import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { H1 } from './../styles/components'
import { flexCenteredAll } from './../styles/mixins'

const Header = props => {
  if (props.resizeState.window_width >= props.resizeState.breakpoints.desktop) {
    return <HeaderWrapper><H1 id='title'>DMBK</H1></HeaderWrapper>
  } else {
    return <HeaderWrapper><H1 id='title'>DMBK</H1></HeaderWrapper>
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
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`