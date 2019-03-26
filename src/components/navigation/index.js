import React from 'react'
import styled from 'styled-components'
import { flexColumn } from './../../styles/mixins'
import NavLink from './NavLink'
import { HEADER_MENU } from './../../../config.json'

export default props =>
	<Nav>
		{HEADER_MENU.map((item, i) =>
			<NavLink slug={item.slug} title={item.title} key={`${item.slug}${i}`} link={item.link}/>
		)}
	</Nav>

const Nav = styled.nav`
	${flexColumn};
`