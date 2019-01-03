import React from 'react'
import styled from 'styled-components'
import { flexColumn, shadow, media  } from './../../styles/mixins'
import { colors, spacing, fonts } from './../../styles/theme.json'

export default (props) => 
  <VideoCaptionWrapper>
    <CaptionInner>
      <h1>
        <span dangerouslySetInnerHTML={{ __html: (props.content.taxonomies.brand[0] || ``) }}/>
        {props.content.taxonomies.brand[0] && <span> | </span>}
        <span dangerouslySetInnerHTML={{ __html: (props.content.title || ``) }} />
      </h1>
      <h2>{props.content.song_title || ``}</h2>
    </CaptionInner>
  </VideoCaptionWrapper>

const VideoCaptionWrapper = styled.div`
  position: relative;
  display: flex;
  margin-top: ${spacing.single_pad};
`

const CaptionInner = styled.div`
  ${shadow};
  ${flexColumn};
  padding: ${spacing.micro_pad};
  background-color: ${colors.pink};
  * {
    color: ${colors.white}!important;
    font-family: ${fonts.sans_medium};
    line-height: 1.35;
    font-size: ${fonts.sizes.body_sm};
    ${media.medium`
      font-size: ${fonts.sizes.body};
    `}
  }
  ${media.medium`
    width: auto;
    min-width: 40rem;
    padding: ${spacing.single_pad};
  `}
`