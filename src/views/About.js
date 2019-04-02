import React from 'react'
import { Transition } from 'react-spring'
import styled from 'styled-components'
import { Head, apiData, FullWindow, FitImage } from './../components'
import { StyledMarkup } from './../styles/components'
import { flexCenteredAll, animationRotate, animationFadeIn } from './../styles/mixins'
import { colors } from './../styles/theme'
import AboutContent from './about-components/AboutContent'

export default apiData(props =>
  <React.Fragment>
    <Head title={`About`} />
    <Transition
      from={{ opacity: 0, transform: `matrix3d(-1.45, 0.02, 0.00, 0.0005, 0.025, -1.45,0.00,0.0001,0,0,1,0,0,0,10,1)` }}
      enter={{ opacity: 1, transform: `transform: matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,0,0,1)` }}
      leave={{ opacity: 0, transform: `matrix3d(1.45, 0.02, 0.00, 0.0005, 0.025, 1.45,0.00,0.0001,0,0,1,0,0,0,10,1)`, pointerEvents: 'none' }}
    >
      {props && (styles =>
        <AboutContent styles={styles}>
          <StyledMarkup dangerouslySetInnerHTML={{ __html: props.options.about_page_copy }} />
        </AboutContent>
      )}
    </Transition>
    <Transition
      from={{ opacity: 0, transform: `matrix3d(0.5, 0.05, 0.5, 0.0005, 0.025, 1.145,0.50,0.0001,0,0,1,0,0,0,10,1)` }}
      enter={{ opacity: 1, transform: `transform: matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,0,0,1)` }}
      leave={{ opacity: 0, transform: `matrix3d(-1.25, 0.02, 0.00, 0.0005, 0.025, -1.45,0.00,0.0001,0,0,1,0,0,0,10,1)`, pointerEvents: 'none' }}
    >
      {props && (styles =>
        <FullWindow zindex={0} bgcolor={'#0B9444'} styles={styles}>
          <LogoWrap>
            <div className='inner-wrapper'>
              <FitImage src="assets/imgs/trojan-jamaica-logo-dk-grn.svg" fit={'contain'} />
            </div>
          </LogoWrap>
          <BgGreen>
            <svg width="1709px" height="1024px" preserveAspectRatio="none" viewBox="0 0 1709 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="ABOUT" fill="#115B2F">
                  <g id="bg-home" transform="translate(0.000000, -445.000000)">
                    <path d="M-2.13162821e-14,1233.69431 C60.6969765,1208.94971 121.993119,1185.66551 182.137293,1159.52641 C278.002916,1117.86218 371.221611,1071.28014 461.886669,1019.17652 C525.358064,982.699053 591.379436,952.485946 656.356305,918.712544 C685.253003,903.410229 714.235676,888.270744 743.302494,873.295918 C782.735685,851.012059 815.881735,821.724701 851.378375,793.871707 C936.072754,727.415313 1023.75979,665.796235 1116.16813,610.609837 C1197.28266,562.170802 1277.51732,508.327291 1355.25688,454.577087 C1361.22643,450.449762 1367.19603,446.248077 1373.17346,442 L1709,442 L1709,881.522847 C1662.57544,919.579252 1614.33321,956.137199 1566.89588,992.818267 C1538.97783,1013.1683 1511.58112,1034.19526 1484.70575,1055.89915 C1458.07732,1079.82045 1435.64703,1106.70013 1407.00826,1128.6254 C1366.01837,1160.00941 1320.02914,1182.92264 1278.86731,1214.06149 C1233.33173,1248.50817 1179.95964,1278.18705 1132.05701,1309.49605 C1077.67151,1345.04411 1021.68908,1378.55223 965.481643,1411.10533 C933.462545,1429.64906 902.562655,1449.83943 871.029056,1469 L0,1469 L0,1233.69431 Z" id="Combined-Shape"></path>
                  </g>
                </g>
              </g>
            </svg>
          </BgGreen>
        </FullWindow>
      )}
    </Transition>
  </React.Fragment>
)

const LogoWrap = styled.div`
  width: 30vw;
  height: 30vw;
  position: fixed;
  top: -15vw;
  left: 20vw;
  ${animationFadeIn(1000, 1000)};
  .inner-wrapper {
    ${animationRotate(65000)};
    width: 100%;
    height: 100%;
    position: relative;
  }
`

const BgGreen = styled.div`
  ${animationFadeIn(1000, 750)};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`