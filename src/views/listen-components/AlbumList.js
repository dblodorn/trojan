import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import AlbumLink from './AlbumLink'
import AlbumWrapper from './AlbumWrapper'
import { flexRow, media } from '../../styles/mixins'

const AlbumList = props =>
	<AlbumWrapper styles={props.styles}>
		<Albums>
			{props.releases && props.releases.map((item, i) =>
				<li key={`${item.post_data.slug}-album-${i}`}>
					<AlbumLink data={item}  />
				</li>
			)}
		</Albums>
	</AlbumWrapper>

export default connect(
	state => ({
		wh: state.resizeState.window_height,
	})
)(AlbumList)

const Albums = styled.ul`
  ${flexRow};  
  width: 100%;
	padding:  10rem 4rem;
	position: relative;
	z-index: 100;
	height: 100%;
	min-height: 40rem;
	align-items: center;
	justify-content: center;
	li {
		position: relative;
		flex-shrink: 0;
		width: 100%;
		padding: 1rem;
		height: 100%;
    flex-shrink: 0;
    ${media.desktop`
      width: calc(100% / 2);
    `}
    ${media.medium`
      width: calc(100% / 3);
    `}
  }
`
