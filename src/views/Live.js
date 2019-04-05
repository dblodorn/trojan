import React from 'react'
import { Transition } from 'react-spring'
import styled from 'styled-components'
import { Head, apiData, FullWindow, FitImage } from './../components'
import { animationFadeIn, animationRotate, flexRow, flexColumn } from './../styles/mixins'
import { colors } from './../styles/theme'
import TouringModal from './tour-components/TouringModal'
import AlbumWrapper from './listen-components/AlbumWrapper'

export default apiData(props =>
  <React.Fragment>
    <Head title={`Live`} />
    <AlbumWrapper color={colors.orange}>
      <LiveWrapper>
        <h1>Trojan Jamaica Live</h1>
        <ul className='artists'>
          {props.options.live_info.map((item, i) =>
            <li key={`tour${i}`}>
              <TouringModal data={item}/>
            </li>
          )}
        </ul>
      </LiveWrapper>
    </AlbumWrapper>
    <Transition
      from={{ opacity: 0, transform: `matrix3d(0.5, 0.05, 0.5, 0.0005, 0.025, 1.145,0.50,0.0001,0,0,1,0,0,0,10,1)` }}
      enter={{ opacity: 1, transform: `transform: matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,0,0,1)` }}
      leave={{ opacity: 0, transform: `matrix3d(-1.25, 0.02, 0.00, 0.0005, 0.025, -1.45,0.00,0.0001,0,0,1,0,0,0,10,1)`, pointerEvents: 'none' }}
    >
      {props && (styles =>
        <FullWindow zindex={0} bgcolor={colors.blue} styles={styles}>
          <LogoWrap>
            <div className='inner-wrapper'>
              <FitImage src="assets/imgs/trojan-jamaica-logo-red.svg" fit={'contain'} />
            </div>
          </LogoWrap>
        </FullWindow>
      )}
    </Transition>
  </React.Fragment>
)

const LiveWrapper = styled.div`
  ${flexColumn};
  width: 100%;
	padding: 5rem 4rem;
	position: relative;
	z-index: 100;
	height: 100%;
	min-height: 40rem;
  h1 {
    font-family: 'Eurostile Extd', sans-serif;
    font-style: normal;
    font-weight: 800;
    text-align: center;
    width: 100%;
    color: #fc0d1b;
    text-transform: uppercase;
    font-size: 4.5rem;
    max-width: 65rem;
    margin: 0 auto 1.5rem;
  }
  ul {
    ${flexRow};
    width: 100%;
    position: relative;
  }
  li {
    width: calc(100% / 3);
    padding: 1rem;
    
  }
`

const LogoWrap = styled.div`
  width: 37vw;
  height: 37vw;
  position: fixed;
  bottom: 5vh;
  right: 12vw;
  ${animationFadeIn(1000, 1000)};
  .inner-wrapper {
    ${animationRotate(65000)};
    width: 100%;
    height: 100%;
    position: relative;
  }
`