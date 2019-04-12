import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { setMenuState } from './../state/actions'
import { flexColumn, buttonInit, absoluteCentered, animationFadeIn } from './../styles/mixins'
import { colors, fonts } from './../styles/theme'
import Navigation from './navigation'
import Socials from './navigation/Socials'
import Close from './utils/Close'
import HoverBg from './navigation/HoverBg'
import FitImage from './utils/FitImage'
import BgStroke from './BgStroke'
import HeaderPortal from './HeaderPortal'

const HeaderMobile = props => 
  <HeaderPortal>
    <LogoWrapper to={'/'} className={(props.router === `/` && 'active')}>
      <div className='img-wrapper'>
        <FitImage src="/assets/imgs/trojan-logo-blk.svg"/>
      </div>
    </LogoWrapper>
    <MenuButton onClick={() => props.setMenuState(true)}>
      <span>MENU</span>
      <HoverBg color={colors.red}/>
    </MenuButton>
    <HeaderWrapper className={props.menuState && 'show'}>
      <Close size={'5rem'} clickFunction={() => props.setMenuState(false)}/>
      <Navigation/>
      <Socials/>
      <StrokeWrapper>
        <BgStroke color={'#f96800'}/>
      </StrokeWrapper>
    </HeaderWrapper>
  </HeaderPortal>

export default connect(
	state => ({
    menuState: state.menuState,
    router: state.routeState
	}),
  dispatch => ({
    setMenuState: (bool) => dispatch(setMenuState(bool))
  })
)(HeaderMobile)

const StrokeWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
  transform: rotate(180deg);
`

const LogoWrapper = styled(Link)`
  width: 9rem;
  height: 9rem;
  top: 1.5rem;
  left: 1.5rem;
  display: block;
  position: fixed;
  z-index: 1000;
  padding: .25rem;
  border-radius: 50%;
  background-color: ${colors.orange};
  transform: rotate(-5deg);
  &.active {
    background-color: ${colors.yellow_gold};
    pointer-events: none;
  }
  .img-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
  }
  img {
    ${absoluteCentered};
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const HeaderWrapper = styled.menu`
  ${flexColumn};
  ${animationFadeIn(0, '300ms')}
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
  right: 1.5rem;
  z-index: 1000;
  height: 4rem;
  width: 10rem;
  transform: rotate(2deg);
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
