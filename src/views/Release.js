import React from 'react'
import { Transition } from 'react-spring'
import styled from 'styled-components'
import { Head, pageData, FullWindow, FitImage, BackClose, HoverRect } from './../components'
import { animationFadeIn, animationRotate, animationRotateRev, flexRow, flexColumn, sansFont, media } from './../styles/mixins'
import { colors } from './../styles/theme'
import { trimExcerpt } from './../scripts'
import AlbumPhoto from './listen-components/AlbumPhoto'
import AlbumWrapper from './listen-components/AlbumWrapper'

export default pageData(props => {
  return (
    <React.Fragment>
      <Head 
        title={`Release`}
        description={trimExcerpt(props.about_release)}
      />
      <AlbumWrapper>
        <ReleaseWrapper>
          <BackClose/>
          <div className='album-container'>
            <AlbumPhoto image={props.post_data.thumbnail} />
            <h1>{props.post_data.title}</h1>
          </div>
          <div className='copy-wrapper'>
            <div className='album-copy' dangerouslySetInnerHTML={{ __html: props.about_release }} />
            <div className='streaming'>
              {props.purchase_link &&
                <ReleaseDiv>
                  <a href={props.purchase_link}><HoverRect title={'GET IT HERE'} opacity={1} full/></a>
                </ReleaseDiv>
              }
              {props.video_link &&
                <ReleaseDiv>
                  <a href={props.video_link}><HoverRect title={'WATCH VIDEO'} opacity={1} full/></a>
                </ReleaseDiv>
              }
            </div>
          </div>
        </ReleaseWrapper>
      </AlbumWrapper>
      <Transition
        from={{ opacity: 0, transform: `matrix3d(0.5, 0.05, 0.5, 0.0005, 0.025, 1.145,0.50,0.0001,0,0,1,0,0,0,10,1)` }}
        enter={{ opacity: 1, transform: `transform: matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,0,0,1)` }}
        leave={{ opacity: 0, transform: `matrix3d(-1.25, 0.02, 0.00, 0.0005, 0.025, -1.45,0.00,0.0001,0,0,1,0,0,0,10,1)`, pointerEvents: 'none' }}
      >
        {props && (styles =>
          <FullWindow zindex={0} bgcolor={colors.yellow_gold} styles={styles}>
            <LogoWrap>
              <div className='inner-wrapper'>
                <FitImage src="assets/imgs/trojan-jamaica-logo-red.svg" fit={'contain'} />
              </div>
            </LogoWrap>
            <TopCircle>
              <div className='fade'>
                <div className='inner-wrapper'>
                  <FitImage src="assets/imgs/releases-ball.svg" fit={'contain'} />
                </div>
              </div>
            </TopCircle>
          </FullWindow>
        )}
      </Transition>
    </React.Fragment>
  )
})

const ReleaseDiv = styled.div`
  width: 14rem;
  height: 3rem;
  will-change: transform;
  padding: 0 1rem;
  transition: transform 250ms ease-in-out;
  &:hover {
    transform: scale(1.05) rotate(-2.5deg);
  }
  a {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
  }
`

const ReleaseWrapper = styled.div`
  ${flexColumn};
  width: 100%;
	padding: 5rem 4rem;
	position: relative;
	z-index: 100;
	height: 100%;
	min-height: 40rem;
  ${media.desktop`
    ${flexRow};
  `}
  .streaming {
    position: relative;
    width: 100%;
    ${flexRow};
    justify-content: center;
  }
  .album-container {
    ${flexColumn};
    position: relative;
		flex-shrink: 0;
		width: 100%;
		height: 100%;
		flex-shrink: 0;
    ${media.desktop`
      padding: 1rem;
      width: calc(100% / 3);
    `}
  }
  h1 {
    color: white;
    ${sansFont};
    text-align: left;
    line-height: 1.25;
    padding-top: 1rem;
    text-transform: uppercase;
    font-size: 1.65rem;
    ${media.desktop`
      text-align: center;
    `}
  }
  .copy-wrapper {
    width: 100%;
    ${media.desktop`
      padding: 0 4rem;
      width: calc((100% / 3) * 2);
    `}
  }
  .album-copy {
    padding-bottom: 4rem;
    p {
      ${sansFont};
      font-size: 1.45rem;
      line-height: 1.25;
      color: white;
      padding-bottom: 1rem;
      &:last-child {
        padding-bottom: 0;
      }
    }
  }
`

const LogoWrap = styled.div`
  width: 30vw;
  height: 30vw;
  position: fixed;
  top: 5vh;
  right: 15vw;
  ${animationFadeIn(1000, 1000)};
  .inner-wrapper {
    ${animationRotateRev(65000)};
    width: 100%;
    height: 100%;
    position: relative;
  }
`

const TopCircle = styled.div`
  width: 45vw;
  height: 45vw;
  position: fixed;
  bottom: -25vw;
  left: -25vw;
  transform: translate(10vw, -10vw);
  .fade {
    ${animationFadeIn(1000, 500)};
    width: 100%;
    height: 100%;
    position: relative;
  }
  .inner-wrapper {
    ${animationRotate(65000)};
    width: 100%;
    height: 100%;
    position: relative;
  }
`