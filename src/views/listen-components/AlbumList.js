import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import AlbumLink from './AlbumLink'
import ListenBg from './ListenBg'
import { flexRow } from '../../styles/mixins'

const AlbumList = props =>
	<AlbumListWrapper height={props.wh} style={props.styles}>
		<div className='albums'>
			<ul>
				{props.releases && props.releases.map((item, i) =>
					<li key={`${item.post_data.slug}-album-${i}`}>
						<AlbumLink data={item}  />
					</li>
				)}
			</ul>
			<ListenBg/>
		</div>
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
	.albums {
		width: 100%;
		position: relative;
	}
	ul {
		width: 100%;
		padding:  10rem 4rem;
		position: relative;
		z-index: 100;
		height: 100%;
		min-height: 40rem;
		${flexRow};
		align-items: center;
		justify-content: center;
	}
	li {
		position: relative;
		flex-shrink: 0;
		width: calc(100% / 3);
		padding: 1rem;
		height: 100%;
		flex-shrink: 0;
	}
`