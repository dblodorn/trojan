import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { media } from './../../styles/mixins'
import ListenBg from './ListenBg'
import { ResponsiveWrapper } from './../../components'

const AlbumList = props =>
	<ResponsiveWrapper 
		desktop={
			<AlbumListWrapper height={props.wh} style={props.styles}>
				<Albums>
					{props.children}
					<ListenBg color={props.color} />
				</Albums>
			</AlbumListWrapper>
		}
		mobile={
			<AlbumListWrapper>
				<Albums>
					{props.children}
					<ListenBg color={props.color} />
				</Albums>
			</AlbumListWrapper>
		}
	/>

export default connect(
	state => ({
		wh: state.resizeState.window_height,
	})
)(AlbumList)

const AlbumListWrapper = styled.section`
	width: 100%;
	position: relative;
	max-width: 86rem;
	padding: 3rem;
	margin: 10rem auto 6rem;
	display: flex;
	align-items: flex-start;
	min-height: 45rem;
	background-color: transparent;
	${media.desktop`
		align-items: center;
		margin: 0 auto;
		position: absolute;
		left: 0;
		right: 0;
		height: ${props => props.height}px;
	`}
`

const Albums = styled.div`
	width: 100%;
	position: relative;
`