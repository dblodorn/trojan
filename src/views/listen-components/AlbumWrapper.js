import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import ListenBg from './ListenBg'

const AlbumList = props =>
	<AlbumListWrapper height={props.wh} style={props.styles}>
		<Albums>
			{props.children}
			<ListenBg color={props.color}/>
		</Albums>
	</AlbumListWrapper>

export default connect(
	state => ({
		wh: state.resizeState.window_height,
	})
)(AlbumList)

const AlbumListWrapper = styled.section`
	width: 100%;
	max-width: 86rem;
	height: ${props => props.height}px;
	padding: 3rem;
	margin: auto;
	display: flex;
	align-items: center;
`

const Albums = styled.div`
	width: 100%;
	position: relative;
`