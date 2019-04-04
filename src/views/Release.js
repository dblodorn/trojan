import React from 'react'
import { Transition } from 'react-spring'
import styled, { css, keyframes } from 'styled-components'
import { Head, pageData, FullWindow, FitImage } from './../components'
import { } from './../styles/components'
import { animationFadeIn, animationRotate, animationRotateRev } from './../styles/mixins'
import { colors } from './../styles/theme'
import AlbumPhoto from './listen-components/AlbumPhoto'
import ListenBg from './listen-components/ListenBg'

export default pageData(props => {
  console.log(props.post_data)
  return (
    <React.Fragment>
      <Head title={`Release`} />
      <ReleaseWrapper>
        <AlbumPhoto image={props.post_data.thumbnail}  />
        <ListenBg/>
      </ReleaseWrapper>
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
  width: 100%;
  max-width: 86rem;
  height: 100%;
  padding: 3rem;
  margin: auto;
  display: flex;
  align-items: center;
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