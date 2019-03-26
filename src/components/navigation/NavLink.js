import React from 'react'
import { NavWrapper } from './../../styles/components'
import HoverRect from './HoverRect'

export default props =>
	<NavWrapper to={`/${props.item.slug}`}>
		<div className='image-wrapper'>
			<img src={`/assets/navigation/${props.item.image}.svg`}/>
		</div>
		<HoverRect title={props.item.title} />
	</NavWrapper>
