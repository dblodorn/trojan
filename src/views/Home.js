import React from 'react'
import { Transition } from 'react-spring'
import styled from 'styled-components'
import { Head, apiData, FullWindow, FitImage } from './../components'
import { } from './../styles/components'
import { flexCenteredAll, animationRotate, animationFadeIn } from './../styles/mixins'
import { colors } from './../styles/theme'

export default apiData(props =>
  <React.Fragment>
    <Head title={`Home`} />
    <Transition
      from={{ opacity: 0, transform: `matrix3d(0.5, 0.05, 0.5, 0.0005, 0.025, 1.145,0.50,0.0001,0,0,1,0,0,0,10,1)` }}
      enter={{ opacity: 1, transform: `transform: matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,0,0,1)` }}
      leave={{ opacity: 0, transform: `matrix3d(-1.25, 0.02, 0.00, 0.0005, 0.025, -1.45,0.00,0.0001,0,0,1,0,0,0,10,1)`, pointerEvents: 'none' }}
    >
      {props && (styles =>
        <FullWindow zindex={0} bgcolor={colors.green} styles={styles}>
          <HomeBgWrapper>
            <LogoWrap>
              <div className='inner-wrapper'>
                <FitImage src="assets/imgs/trojan-logo-yellow.svg" fit={'contain'} />
              </div>
            </LogoWrap>
            <div className='bg-black'>
              <svg width="1154px" height="1024px" viewBox="0 0 1154 1024" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="HOME" transform="translate(-306.000000, 0.000000)" fill="#231F20">
                    <g id="bg-home" transform="translate(306.000000, 0.000000)">
                      <path d="M1131.19134,1.23751711e-08 C1136.59849,71.3795986 1154,142.165541 1154,213.778312 C1154,289.331986 1142.10686,365.670554 1142.10686,441.225927 C1142.10686,471.585347 1143.16535,502.179217 1142.28186,532.525046 C1141.41706,562.249077 1138.61537,591.279954 1138.79887,621.189165 C1138.98576,651.502716 1143.69035,687.979891 1143.80588,718.352903 C1143.92651,749.81831 1144.36656,775.769074 1143.80588,807.093472 C1143.11098,845.879459 1140.43503,854.380776 1140.40784,893.34005 C1140.39765,907.374699 1133.92778,964.454487 1131.91274,978.285268 C1130.38272,988.793023 1124.90751,1008.68168 1121.24438,1024 L25.1849762,1024 C15.039972,994.188683 8.97210213,962.761074 4.44142665,931.745482 C-0.743982128,896.260467 0.2992161,859.6151 0.377371016,823.871852 C0.419846514,804.502643 -0.883301761,784.841223 1.12154174,765.54167 C5.10064638,727.236474 2.2021184,689.223489 3.58851865,650.772187 C5.18219933,606.548008 10.9486729,562.108068 10.6377523,517.785352 C10.5120248,499.642753 10.5494032,481.498454 10.5595974,463.354156 C10.5680925,448.514226 8.75863626,432.744996 11.3156612,418.069861 C15.7552003,392.589693 11.4040103,366.997398 14.6355461,341.444178 C18.7930479,308.555089 23.5333134,275.771331 26.7937327,242.756523 C30.2121607,208.131154 33.4131142,174.214227 34.2677213,139.454644 C34.6839811,122.502977 39.4548291,105.789156 41.1419558,88.8272949 C44.0855868,59.2337919 47.9139258,30.0336533 47.9379221,1.55098295e-11 L1131.19134,0 Z"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </HomeBgWrapper>
        </FullWindow>
      )}
    </Transition>
  </React.Fragment>
)

const HomeBgWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 70vw;
  margin: 0 auto;
  svg {
    width: 100%;
    height: 100vh;
  }
`

const LogoWrap = styled.div`
  ${flexCenteredAll};
  ${animationFadeIn(1000, 500)};
  width: 65%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  .inner-wrapper {
    ${animationRotate(85000)};
    width: 100%;
    height: 100%;
    position: relative;
  }
`