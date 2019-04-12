import React from 'react'
import styled from 'styled-components'
import { colors } from './../../styles/theme'

export default () =>
  <AudioPlayButton>
    <svg id='audio_play_button' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 149 157'>
      <path d='M35.9,149.8c-15.7,7.7-30.4,5.8-31-12.1C3.8,105.2,1.2,62.5,2,30C2.6,8.9,11.9,2.9,31.7,11.4C58.3,23,63.9,23.9,91.8,37.1 c9.9,4.7,51,25,55.9,33.3C115.5,110.6,76,130.2,35.9,149.8z'/>
    </svg>
  </AudioPlayButton>

const AudioPlayButton = styled.div`
  width: 100%;
  height: 100%;
  svg {
    width: 100%;
    height: 100%;
    fill: ${colors.yellow_gold};
  }
`
