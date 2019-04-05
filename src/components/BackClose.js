import React from 'react'
import { Link } from 'react-router-dom'
import { CloseButton } from './../styles/components'

export default () =>
  <Link to={`/listen`}>
    <CloseButton size={'3.5rem'} positionY={'1.5rem'} positionX={'3.5rem'}>
      <svg width="41px" height="40px" viewBox="0 0 41 40" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="RELEASES" transform="translate(-1229.000000, -217.000000)" stroke="#FFFFFF">
            <g id="close-img" transform="translate(1230.000000, 217.000000)">
              <rect id="Rectangle" x="0.5" y="1" width="38" height="38"></rect>
              <path d="M0,0.5 L39,39.5" id="Line" stroke-linecap="square"></path>
              <path d="M0,39.5 L40,0.5" id="Line-2" stroke-linecap="square"></path>
            </g>
          </g>
        </g>
      </svg>
    </CloseButton>
  </Link>
