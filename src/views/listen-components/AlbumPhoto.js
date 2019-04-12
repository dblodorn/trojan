import React from 'react'
import styled from 'styled-components'
import { albumImage, linkInit } from '../../styles/mixins'
import { FitImage } from './../../components'

export default props =>
  <AlbumItem>
    <div className='album-image'>
      <FitImage src={props.image} fit={'cover'}/>
    </div>
  </AlbumItem>

const AlbumItem = styled.div`
  ${linkInit};
  ${albumImage};
`