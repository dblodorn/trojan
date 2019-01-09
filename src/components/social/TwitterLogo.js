import React from 'react'
import { SocialLink } from './../../styles/components'
import { colors } from './../../styles/theme'

export default (props) =>
  <SocialLink href={props.link} target="_blank">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48" width="48" height="48">
      <title>Twitter</title>
      <g fill={colors.green}>
        <path fill={colors.green} d="M48,9.1c-1.8,0.8-3.7,1.3-5.7,1.6c2-1.2,3.6-3.1,4.3-5.4c-1.9,1.1-4,1.9-6.3,2.4c-1.8-1.9-4.4-3.1-7.2-3.1 c-5.4,0-9.8,4.4-9.8,9.8c0,0.8,0.1,1.5,0.3,2.2C15.5,16.2,8.2,12.3,3.3,6.3C2.5,7.8,2,9.4,2,11.2c0,3.4,1.7,6.4,4.4,8.2 c-1.6-0.1-3.1-0.5-4.5-1.2c0,0,0,0.1,0,0.1c0,4.8,3.4,8.8,7.9,9.7c-0.8,0.2-1.7,0.3-2.6,0.3c-0.6,0-1.3-0.1-1.9-0.2 c1.3,3.9,4.9,6.8,9.2,6.8c-3.4,2.6-7.6,4.2-12.2,4.2c-0.8,0-1.6,0-2.3-0.1c4.4,2.8,9.5,4.4,15.1,4.4c18.1,0,28-15,28-28 c0-0.4,0-0.9,0-1.3C45,12.8,46.7,11.1,48,9.1z"/>
      </g>
    </svg>
  </SocialLink>