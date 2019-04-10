import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Transition } from 'react-spring'
import { setMenuState } from './../state/actions'
import { flexColumnCentered, buttonInit, absoluteCentered } from './../styles/mixins'
import { colors, fonts } from './../styles/theme'
import Navigation from './navigation'
import Socials from './navigation/Socials'
import Close from './utils/Close'
import HoverBg from './navigation/HoverBg'

const HeaderMobile = props => 
  <React.Fragment>
    <MenuButton onClick={() => props.setMenuState(true)}>
      <span>MENU</span>
      <HoverBg color={colors.red}/>
    </MenuButton>
    <Transition
      from={{ opacity: 0, transform: `matrix3d(0.5, 0.05, 0.5, 0.0005, 0.025, 1.145,0.50,0.0001,0,0,1,0,0,0,10,1)` }}
      enter={{ opacity: 1, transform: `transform: matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,0,0,1)` }}
      leave={{ opacity: 0, transform: `matrix3d(-1.25, 0.02, 0.00, 0.0005, 0.025, -1.45,0.00,0.0001,0,0,1,0,0,0,10,1)`, pointerEvents: 'none' }}
    >
      {props.menuState && (styles =>
        <HeaderWrapper style={styles}>
          <Close size={'5rem'} clickFunction={() => props.setMenuState(false)}/>
          <Navigation/>
          <Socials/>
        </HeaderWrapper>
      )}
    </Transition>
  </React.Fragment>

export default connect(
	state => ({
		menuState: state.menuState
	}),
  dispatch => ({
    setMenuState: (bool) => dispatch(setMenuState(bool))
  })
)(HeaderMobile)

const HeaderWrapper = styled.header`
  ${flexColumnCentered};
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 9000;
  background-color: ${colors.orange};
`
const MenuButton = styled.button`
  ${buttonInit};
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 1000;
  height: 4rem;
  width: 10rem;
  span {
    ${absoluteCentered};
    z-index: 10;
    height: 1.2rem;
    font-family: ${fonts.eurostile};
    font-weight: 800;
    font-size: 1.5rem;
    color: ${colors.yellow};
  }
`
