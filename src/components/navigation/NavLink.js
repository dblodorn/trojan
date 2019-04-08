import React from 'react'
import { connect } from 'react-redux'
import { NavWrapper } from './../../styles/components'
import HoverRect from './HoverRect'

const NavLink = props =>
	<NavWrapper to={`/${props.item.slug}`} className={(props.router === `/${props.item.slug}` && 'active')}>
		<div className='image-wrapper'>
			{(props.router === `/${props.item.slug}`) 
				? <img src={`/assets/navigation/hover-${props.item.image}.svg`}/>
				: <img src={`/assets/navigation/${props.item.image}.svg`}/>
			}
		</div>
		<HoverRect title={props.item.title} />
	</NavWrapper>

export default connect(
	state => ({
		router: state.routeState
	})
)(NavLink)
