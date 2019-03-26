import React from 'react'
import { NavWrapper } from './../../styles/components'
import HoverRect from './HoverRect'

export default props =>
	<NavWrapper to={`/${props.slug}`}>
		<div className='image-wrapper'>
			<img src={`/assets/navigation/${props.slug}.svg`}/>
		</div>
		<HoverRect title={props.title} />
	</NavWrapper>
