import React, { useState }  from 'react'
import styled, { css } from 'styled-components'

export default props => {
  const [loaded, isLoaded] = useState(false)
  return (
    <ImgWrapper alpha={loaded ? 1 : 0}> 
      <ImgFit src={props.src} onLoad={() => isLoaded(true)} fit={props.fit || 'cover'}/>
    </ImgWrapper>
  )
}

const sharedRules = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const ImgWrapper = styled.div`
  ${sharedRules};
  opacity: ${props => props.alpha};
  width: 100%;
  height: 100%;
  transition: opacity 150ms ease-in-out;
  will-change: opacity;
  overflow: hidden;
`

const ImgFit = styled.img`
  ${sharedRules};
  object-fit: ${props => props.fit};
  bottom: 0;
  right: 0;
  margin: auto;
  overflow: hidden;
`
