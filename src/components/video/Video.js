import React, { Fragment } from 'react'
import styled from 'styled-components'
import YouTube from 'react-youtube'
import getYouTubeID from 'get-youtube-id'
import { ModalContentWrapper } from './../../styles/components'
import { absoluteTopFull, shadow, flexCenteredAll, media, flexColumn, animationFadeIn } from './../../styles/mixins'
import { colors, spacing } from './../../styles/theme'  

const opts = {
  playerVars: {
    autoplay: 1,
    modestbranding: 1,
    playsinline: 1,
    rel: 0,
    controls: 0,
  }
}

export default props =>
  <Fragment>
    <ModalContentWrapper>
      <VideoSection>
        <VideoWrapper>
          <VideoContainer>
            <YouTube
              videoId={getYouTubeID(props.data.video)}
              opts={opts}
              className={'video-player'}
              containerClassName={'video-container'}
            />
          </VideoContainer>
        </VideoWrapper>
      </VideoSection>
    </ModalContentWrapper>
  </Fragment>

// STYLES
const VideoContainer = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  overflow-y: visible;
  position: relative;
  .video-container {
    ${animationFadeIn(250, 10)};
  }
  iframe {
    ${absoluteTopFull};
    ${shadow};
    z-index: 100;
    background-color: ${colors.black};
  }
`

const VideoSection = styled.section`
  ${flexCenteredAll};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`

const VideoWrapper = styled.div`
  ${flexColumn};
  width: 100%;
  padding: ${spacing.double_pad} 1rem 8rem;
  margin-bottom: 4rem;
  background-image: url('/assets/imgs/video-bg.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  ${media.desktopNav`
    width: 80vw;
    max-width: 96rem;
    padding: 0;
    padding: 8rem;
    margin-bottom: 0;
  `}
  ${media.big`
    width: 85vw;
    max-width: 126rem;
    padding: 0;
    padding: 8rem;
    margin-bottom: 0;
  `}
`