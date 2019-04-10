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
    <HeaderWrapper className={props.menuState && 'show'}>
      <Close size={'5rem'} clickFunction={() => props.setMenuState(false)}/>
      <Navigation/>
      <Socials/>
    </HeaderWrapper>
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
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 9000;
  background-color: ${colors.orange};
  transform: translateX(-100vw);
  transition: transform 250ms ease-in-out;
  will-change: transform;
  &.show {
    transform: translateX(0);
  }
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
