import React from 'react'
import styled from 'styled-components'
import { flexColumn } from './../../styles/mixins'
import NavLink from './NavLink'
import { HEADER_MENU } from './../../../config.json'

export default props =>
	<Nav>
		{HEADER_MENU.map((item, i) =>
			<NavLink item={item} key={`${item.slug}${i}`}/>
		)}
	</Nav>

const Nav = styled.nav`
	${flexColumn};
`