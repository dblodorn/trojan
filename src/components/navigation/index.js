import React from 'react'
import styled from 'styled-components'
import { flexColumn, media } from './../../styles/mixins'
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
  width: 100%;
  max-width: 20rem;
  margin: 8rem auto 2rem;
  ${media.desktop`
    margin: 0 auto;
  `}
`