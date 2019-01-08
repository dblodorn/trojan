import React, { Fragment } from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import { ModalContentWrapper } from './../../styles/components'
import { absoluteTopFull, flexCenteredAll, media, flexColumn, animationFadeIn } from './../../styles/mixins'
import { spacing } from './../../styles/theme'  

export default props => {
  return (
    <Fragment>
      <ModalContentWrapper>
        <VideoSection>
          <VideoWrapper>
            <VideoContainer>
              <VideoInner>
                <ReactPlayer 
                  url={props.data.video} 
                  playing
                  className='player'
                  width={'100%'}
                  height={'100%'}
                  config={{
                    youtube: {
                      playerVars: {
                        showinfo: 0,
                        controls: 1,
                        modestbranding: 1,
                        rel: 0,
                        playsinline: 1
                      }
                    },
                    vimeo: {
                      playerVars: {
                        showinfo: 0,
                        controls: 1
                      }
                    }
                  }}
                />
              </VideoInner>
            </VideoContainer>
          </VideoWrapper>
        </VideoSection>
      </ModalContentWrapper>
    </Fragment>
  )
}

// STYLES
const VideoContainer = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  overflow-y: visible;
  position: relative;
`

const VideoInner = styled.div`
  ${absoluteTopFull};
  .player {
    ${animationFadeIn(250, 10)};
    ${absoluteTopFull};
    z-index: 100;
    width: 100%;
    height: 100%;
  }
  div {
    background-color: transparent!important;
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