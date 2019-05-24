import React from 'react'
import styled from 'styled-components'
import { flexCenteredAll, media } from './../../styles/mixins'
import { fonts } from './../../styles/theme'
import HoverBg from './HoverBg'

export default props =>
	<HoverShape className="hover-shape" opacity={props.opacity} full={props.full}>
		<div className='span-wrapper'>
			<span>{props.title}</span>
		</div>
		<HoverBg/>
	</HoverShape>

const HoverShape = styled.div`
	width: ${props => props.full ? '100%' : '40%' };
  height: ${props => props.full ? '100%' : '50%' };
  margin-top: ${props => props.full ? '0' : '10%' };
	position: relative;
	&.hover-shape {
    ${media.desktop`
      opacity: ${props => props.opacity || 0};
      transition: opacity 400ms ease;
      will-change: opacity;
    `}
	}
	.span-wrapper {
		${flexCenteredAll};
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 4;
  }
	span {
		text-align: center;
		font-family: ${fonts.akzidenz};
		display: block;
		color: white;
		font-size: 1.125rem;
		text-transform: uppercase;
	}
`