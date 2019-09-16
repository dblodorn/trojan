import React from 'react'
import { Transition } from 'react-spring'
import styled from 'styled-components'
import { Head, apiData, FullWindow, FitImage, HoverRect } from './../components'
import { flexColumn, media, bodyType, animationFadeIn, animationRotate, animationRotateRev } from './../styles/mixins'
import { widths, colors, fonts } from './../styles/theme'
import { meta_defaults } from './../../config.json'

export default apiData(props =>
  <React.Fragment>
    <Head 
      title={`Press`}
      description={props.options.press_meta || meta_defaults.description}
    />
    <Transition
      from={{ opacity: 0, transform: `matrix3d(-1.45, 0.02, 0.00, 0.0005, 0.025, -1.45,0.00,0.0001,0,0,1,0,0,0,10,1)` }}
      enter={{ opacity: 1, transform: `transform: matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,0,0,1)` }}
      leave={{ opacity: 0, transform: `matrix3d(1.45, 0.02, 0.00, 0.0005, 0.025, 1.45,0.00,0.0001,0,0,1,0,0,0,10,1)`, pointerEvents: 'none' }}
    >
      {props && (styles =>
        <PressList>
          {props.options.press_articles && props.options.press_articles.map((item, i) =>
            <li key={`press-${i}`}>
              <PressCopy className={item.quote && 'quote'} dangerouslySetInnerHTML={{ __html: item.press_copy }} />
              {item.press_attribution &&
                <div className="attribution">
                  <p>{item.press_attribution}</p>
                </div>
              }
              {item.press_url &&
                <ReadLink>
                  <a href={item.press_url} target="_blank"><HoverRect title={'READ MORE'} opacity={1} full/></a>
                </ReadLink>
              }
              <div className='press-copy-bg'>
                <svg width="783px" height="198px" viewBox="0 0 783 198" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="ABOUT" transform="translate(-479.000000, -235.000000)" fill="#EC3700">
                      <g id="bg-home" transform="translate(0.000000, -445.000000)">
                        <path d="M491.587263,700.624718 C488.072237,702.864403 486.141865,705.796681 481.754187,705.914897 C477.677528,719.904254 481.923833,738.083866 484.589341,752.00512 C487.705955,768.276566 490.916388,784.725336 493.644871,801.103433 C495.021322,809.36444 494.162807,818.31033 494.157666,826.684413 C494.152525,834.987823 492.255568,841.774981 491.463884,849.80341 C490.687622,857.668648 494.639617,858.199337 501.377928,859.959732 C511.663395,862.646583 522.917905,862.097905 533.409004,863.028216 C549.641099,864.468656 565.848775,866.761024 582.091151,868.300406 C603.865034,870.364051 625.602932,872.894137 647.475776,872.800335 C672.794245,872.691113 698.116569,872.80933 723.436323,872.80933 L799.472698,872.80933 C827.16879,872.80933 855.722111,870.753394 883.299964,873.381137 C911.339205,876.052568 939.069997,874.442513 967.185064,875.245613 C983.726892,875.718479 999.854885,878.046826 1016.48796,877.999282 C1035.41384,877.946599 1053.91174,877.440325 1072.78236,876.070558 C1101.49761,873.983783 1129.31451,868.446891 1158.13644,867.742733 C1177.5764,867.267298 1196.82101,863.484376 1216.12088,862.396015 C1225.25609,861.882032 1234.64192,863.693825 1242.70784,860.66389 C1249.18397,858.231461 1255.22185,854.474238 1262,852.296231 C1250.50901,852.896308 1252.73241,831.460609 1252.51778,824.795522 C1252.21833,815.494983 1249.50784,806.862623 1250.29567,797.452863 C1250.93442,789.822771 1252.37127,782.723369 1252.49465,775.032884 C1252.68486,763.276787 1254.75146,752.087357 1255.05606,740.449477 C1255.36322,728.702374 1254.96866,716.897449 1254.99694,705.142636 C1255.01364,698.256537 1257.69843,689.944132 1249.89726,687.600365 C1247.65458,686.927046 1244.52512,688.014122 1242.37112,688.346927 C1226.8446,690.742092 1211.6895,690.370739 1195.9702,690.336045 C1166.28462,690.270512 1136.90877,690.573762 1107.3003,688.406035 C1081.65025,686.528709 1055.99377,684.228631 1030.35143,682.635281 C981.331277,679.589926 932.416509,680.278664 883.281971,680.006253 C853.304647,679.840493 823.486688,683.001494 793.668728,685.777007 C764.360994,688.504977 732.558683,695.720026 703.082588,692.275049 C651.535727,686.248588 599.234453,701.109148 547.380429,694.913072 C530.50959,692.89697 513.665739,693.107703 496.947839,690.916847 C492.244001,690.300066 480.303194,688.350782 479,694.922066 C482.275979,694.875808 485.143263,696.679891 485.426007,700.135148 C484.909356,700.298338 484.651031,700.380575 484.13438,700.543765" id="about-text-bg"></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </li>
          )}
        </PressList>
      )}
    </Transition>
    <Transition
      from={{ opacity: 0, transform: `matrix3d(0.5, 0.05, 0.5, 0.0005, 0.025, 1.145,0.50,0.0001,0,0,1,0,0,0,10,1)` }}
      enter={{ opacity: 1, transform: `transform: matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,0,0,1)` }}
      leave={{ opacity: 0, transform: `matrix3d(-1.25, 0.02, 0.00, 0.0005, 0.025, -1.45,0.00,0.0001,0,0,1,0,0,0,10,1)`, pointerEvents: 'none' }}
    >
      {props && (styles =>
        <FullWindow zindex={0} bgcolor={colors.yellow_gold} styles={styles}>
          <LogoWrap>
            <div className='inner-wrapper'>
              <FitImage src="assets/logo/trojan-logo-dk-green-globe.svg" fit={'contain'} />
            </div>
          </LogoWrap>
          <TopCircle>
            <div className='fade'>
              <div className='inner-wrapper'>
                <FitImage src="assets/imgs/releases-ball-green.svg" fit={'contain'} />
              </div>
            </div>
          </TopCircle>
        </FullWindow>
      )}
    </Transition>
  </React.Fragment>
)

const ReadLink = styled.div`
  width: 14rem;
  height: 3rem;
  position: relative;
  margin: auto;
  z-index: 1000;
  margin-top: 1rem;
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

const PressList = styled.ul`
  ${flexColumn};  
  width: 100%;
	padding:  3rem;
	position: relative;
	z-index: 100;
	height: 100%;
	min-height: 40rem;
  justify-content: center;
  max-width: 96rem;
  margin: auto;
	${media.desktop`
		padding: 6rem 4rem;
		align-items: center;
	`}
	li {
		position: relative;
		width: 100%;
    padding: 3rem;
    margin-bottom: 5rem;
    &:nth-child(1n) {
      transform: rotate(1.5deg) translateX(-5vw);
      max-width: 65rem;
    }
    &:nth-child(2n) {
      transform: rotate(-1.5deg) translateX(2vw);
      max-width: 78rem;
    }
    &:nth-child(2n+1) {
      transform: rotate(-2.5deg) translateX(-2vw);
      max-width: 80rem;
    }
    &:nth-child(2n+2) {
      transform: rotate(3deg);
      max-width: 96rem;
    }
  }
  .press-copy-bg {
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
		svg {
			width: 100%;
    	height: 100%;
		}
  }
  .attribution {
    z-index: 1000;
    position: relative;
    text-align: center;
    padding-bottom: 1rem;
    p {
      color: ${colors.yellow};
      text-align: center;
      font-family: ${fonts.akzidenz};
      display: block;
      font-size: 1.125rem;
      text-transform: uppercase;
      &:before {
        content: '- ';
      }
    }
  }
`

const PressCopy = styled.div`
  padding: 1.5rem;
  color: ${colors.yellow};
  position: relative;
  z-index: 1000;
  p {
    text-align: center;
    ${bodyType};
    margin-bottom: .5rem;
    max-width: ${widths.max_large};
    &:last-child {
      margin-bottom: 0;
    }
  }
  &.quote {
    p:before {
      content: '"';
    }
    p:after {
      content: '"';
    }
  }
`

const LogoWrap = styled.div`
  width: 30vw;
  height: 30vw;
  position: fixed;
  top: 1vh;
  right: 1vw;
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
  bottom: -30vh;
  left: -25vw;
  transform: translate(10vw, -10vw);
  animation-direction: alternate;
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
