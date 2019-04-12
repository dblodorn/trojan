import React from 'react'
import styled from 'styled-components'
import { colors } from './../../styles/theme'

export default () =>
  <PauseButton>
    <svg id='audio_pause_button' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 149 157'>
      <g>
        <path d='M17.3,80.6c-1.3-19.2-3.9-32.9-4.4-51.2c-0.3-14,6.3-18.6,19.6-18.6c15-0.1,12.5,9.7,12.9,18.9c1.3,32.7,3,65.4,4.6,98 c0.6,12.1,0.1,24.2-16.3,24c-15.8-0.2-17.2-11.8-17.1-24.1c0.2-15.7,0.1-11.8,0.1-27.5C15.4,100.1,18.5,80.6,17.3,80.6z'/>
        <path d='M127.5,57.5c1.2,18.5,2.7,36.9,3.3,55.4c0.2,6.9,0.5,15.6-3.2,20.5c-4.5,5.9-13.1,8.7-19.9,12.9c-3.1-6.5-8.9-13-9-19.6 c-0.8-35.6-0.7-71.2,0.5-106.8c0.2-6,7.3-11.7,11.2-17.5c5.4,4.9,14.3,9,15.6,14.8c2.9,13,2.1,26.8,2.7,40.3 C128.2,57.4,127.9,57.4,127.5,57.5z'/>
      </g>
    </svg>
  </PauseButton>

const PauseButton = styled.div`
  width: 100%;
  height: 100%;
  svg {
    width: 100%;
    height: 100%;
    fill: ${colors.yellow_gold};
  }
`
