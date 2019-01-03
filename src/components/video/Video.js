import React, { Fragment } from 'react'
import Vimeo from '@u-wave/react-vimeo'
import styled from 'styled-components'
import { Section, ModalContentWrapper } from './../../styles/components'
import { absoluteTopFull, shadow, flexCenteredAll, media, flexColumn, animationFadeIn } from './../../styles/mixins'
import { colors, spacing } from './../../styles/theme.json'
import BottomLogo from './../BottomLogo'
import VideoCaption from './VideoCaption'
import FitImage from '../utils/FitImage';

const VideoInner = (props) =>
  <VideoContainer>
    <InnerVideoWrapper>
      {props.videoUrl.video_url
        ? <Vimeo
            video={props.videoUrl.video_url}
            autoplay
            className={'player'}
            loop={true}
          />
        : <VidThumb>
            <div className={`inner`}><FitImage src={props.videoUrl.thumbnail} fit={'contain'}/></div>
          </VidThumb>
      }
    </InnerVideoWrapper>
  </VideoContainer>

export default props =>
  <Fragment>
    <ModalContentWrapper>
      <VideoSection>
        <VideoWrapper>
          {(props.data !== null) &&
            <VidBox>
              <VideoInner videoUrl={props.data.video_data} />
              <VideoCaption content={props.data.video_data} />
            </VidBox>
          }
        </VideoWrapper>
      </VideoSection>
    </ModalContentWrapper>
    <BottomLogo />
  </Fragment>

// STYLES
const VideoContainer = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  overflow-y: visible;
  position: relative;
`

const VidBox = styled.div`
  ${animationFadeIn(250, 10)};
`

const VidThumb = styled.div`
  ${absoluteTopFull};
  padding: ${spacing.double_pad};
  .inner {
    position: relative;
    width: 100%;
    height: 100%;
  }
`

const InnerVideoWrapper = styled.div`
  ${absoluteTopFull};
  ${shadow};
  background-color: ${colors.black};
  .player,
  iframe {
    ${absoluteTopFull};
    z-index: 100;
  }
`

const VideoSection = styled(Section)`
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
  ${media.desktopNav`
    width: 75vw;
    max-width: 90rem;
    padding: 0;
    padding: ${spacing.double_pad} 0;
    margin-bottom: 0;
  `}
  ${media.big`
    width: 75vw;
    max-width: 90rem;
    padding: 0;
    margin-bottom: 0;
  `}
`