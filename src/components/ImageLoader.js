import React from 'react'
import styled from 'styled-components'

export default (props) =>
  <ImageLoaderWrapper>
    {props.artists.map((artist, i) =>
      <img id={`thumb_${artist.post_data.slug}`} src={artist.post_data.thumbnail} key={`ai${i}`}/>
    )}
  </ImageLoaderWrapper>

const ImageLoaderWrapper = styled.aside`
  width: 0;
  height: 0;
  overflow: hidden;
  z-index: 0;
  display: none;
  position: fixed;
  bottom: 0;
  right: 0;
  pointer-events: none;
`