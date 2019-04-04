import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { albumImage, linkInit } from '../../styles/mixins'
import { FitImage } from './../../components'

export default props =>
  <AlbumItem to={`/release/${props.data.post_data.slug}`}>
    <div className='album-image'>
      <FitImage src={props.data.post_data.thumbnail} fit={'cover'}/>
    </div>
  </AlbumItem>

const AlbumItem = styled(Link)`
  ${linkInit};
  ${albumImage};
`