import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setMenuState } from './../../state/actions'
import { flexRow, absoluteCentered } from './../../styles/mixins'
import HoverRect from './HoverRect'

const NavLink = props =>
  <NavWrapper 
    to={`/${props.item.slug}`}
    className={(props.router === `/${props.item.slug}` && 'active')}
    onClick={() => props.setMenuState()}
  >
		<div className='image-wrapper'>
      <img className='active-img' src={`/assets/navigation/hover-${props.item.image}.svg`}/>
      <img className='static-img' src={`/assets/navigation/${props.item.image}.svg`}/>
		</div>
		<HoverRect title={props.item.title} />
	</NavWrapper>

export default connect(
	state => ({
		router: state.routeState
	}),
  dispatch => ({
    setMenuState: () => dispatch(setMenuState(false)),
  })
)(NavLink)

const NavWrapper = styled(Link)`
  ${flexRow};
  position: relative;
  width: 100%;
  max-width: 20rem;
  height: 9rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  -webkit-tap-highlight-color: transparent;
  .active-img {
    opacity: 0;
  }
  .static-img {
    opacity: 1;
  }
  &.active {
    pointer-events: none;
    .hover-shape {
      opacity: 1;
    }
    .active-img {
      opacity: 1;
    }
    .static-img {
      opacity: 0;
    }
  }
  &:hover {
    .hover-shape {
      opacity: 1;
    }
    .image-wrapper {
      transform: scale(1.05) rotate(-2.5deg);
    }
  }
  .image-wrapper {
    width: 70%;
    height: 100%;
    position: relative;
    will-change: transform;
    transition: transform 250ms ease-in-out;
    img {
      ${absoluteCentered};
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`