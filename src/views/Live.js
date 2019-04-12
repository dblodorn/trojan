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
              <FitImage src="assets/logo/trojan-logo-red-globe.svg" fit={'contain'} />
            </div>
          </LogoWrap>
          <BgRed>
            <svg width="800px" height="623px" preserveAspectRatio="none" viewBox="0 0 800 623" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Large-Web-Copy" fill="#EC0400">
                  <g id="Group-3" transform="translate(0.000000, 0.000000)">
                    <path d="M511.644321,0 L719.584823,0 C724.879538,4.42255608 729.786544,9.22411459 734.811052,14.437352 C747.475442,27.5792769 761.671367,38.4258197 774.993225,50.7936759 C788.66011,63.4795901 798.763636,79.0088658 799.783382,98.525362 C801.558351,132.440687 792.13146,174.78838 782.261784,206.827929 C768.217287,252.415598 738.456832,292.703578 712.163893,331.794051 C662.351646,405.844075 604.925813,466.765587 529.717696,515.014596 C451.565353,565.150877 363.838523,597.104206 272.255063,611.075764 C211.154698,620.397161 144.378646,628.484647 82.7415727,618.214824 C53.2870692,613.306003 26.9432641,602.952355 1.43884904e-13,592.143387 L0,189.078447 L55.0493598,174.249981 C90.9282856,174.259561 126.828296,175.037461 162.68422,173.54872 C197.319134,172.109795 233.792272,171.93927 267.564619,163.211836 C289.400965,157.567266 311.440494,148.199884 332.400855,139.899721 C377.114377,122.193856 415.740098,88.9127308 452.171066,58.3293504 C473.645051,40.3015741 492.790716,20.330136 511.644321,2.00373051e-12 Z" id="Combined-Shape"></path>
                  </g>
                </g>
              </g>
            </svg>
          </BgRed>
        </FullWindow>
      )}
    </Transition>
  </React.Fragment>
)

const BgRed = styled.div`
  ${animationFadeIn(1000, 750)};
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  height: 50%;
  svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

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