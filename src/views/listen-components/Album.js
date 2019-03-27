import React from 'react'
import styled, { css } from 'styled-components'
import { connect } from 'react-redux'
import { flexColumn } from '../../styles/mixins'
import { FitImage } from './../../components'

export default class extends React.Component {
	constructor (props) {
		super(props)
		console.log(this.props)
		this.state = {
			popped: false
		};
	}

	render() {
		return (
			<AlbumItem>
				<div className='album-image'>
					<FitImage src={this.props.data.post_data.thumbnail} fit={'cover'}/>
				</div>
			</AlbumItem>
		)
	}
}

const AlbumItem = styled.div`
	display: flex;
	height: 100%;
	position: relative;
	padding: 2rem;
	background-image: url('assets/imgs/record-bg.svg');
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	.album-image {
		width: 100%;
		height: 0;
		overflow-y: visible;
		padding-bottom: 100%;
		position: relative;
	}
`