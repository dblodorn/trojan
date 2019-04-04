import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { flexColumn } from '../../styles/mixins'
import { FitImage } from './../../components'

export default props =>
  <AlbumItem to={`/release/${props.data.post_data.slug}`}>
    <div className='album-image'>
      <FitImage src={props.data.post_data.thumbnail} fit={'cover'}/>
    </div>
  </AlbumItem>

const AlbumItem = styled(Link)`
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