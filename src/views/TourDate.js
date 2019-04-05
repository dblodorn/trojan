import React from 'react'
import { Transition } from 'react-spring'
import styled from 'styled-components'
import { Head, tourData, FullWindow, FitImage, BackClose } from './../components'
import { animationFadeIn, animationRotate, animationRotateRev, flexRow, flexColumn, sansFont } from './../styles/mixins'
import { colors } from './../styles/theme'
import AlbumPhoto from './listen-components/AlbumPhoto'
import AlbumWrapper from './listen-components/AlbumWrapper'

export default tourData(props => {
  console.log(props)
  return (
    <React.Fragment>
      <Head title={`Release`} />
      <AlbumWrapper>
        <ReleaseWrapper>
          <BackClose/>
          <div className='album-container'>
            <AlbumPhoto image={props.post_data.thumbnail} />
            <h1>{props.post_data.title}</h1>
          </div>
          <div className='copy-wrapper'>
            <div className='album-copy' dangerouslySetInnerHTML={{ __html: props.about_release }} />
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

const ReleaseWrapper = styled.div`
  ${flexRow};
  width: 100%;
	padding: 5rem 4rem;
	position: relative;
	z-index: 100;
	height: 100%;
	min-height: 40rem;
  .album-container {
    ${flexColumn};
    position: relative;
		flex-shrink: 0;
		width: calc(100% / 3);
		padding: 1rem;
		height: 100%;
		flex-shrink: 0;
  }
  h1 {
    color: white;
    ${sansFont};
    text-align: center;
    line-height: 1.25;
    padding-top: 1rem;
    text-transform: uppercase;
    font-size: 1.65rem;
  }
  .copy-wrapper {
    width: calc((100% / 3) * 2);
    padding: 0 4rem;
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