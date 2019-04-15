import React from 'react'
import { Transition } from 'react-spring'
import styled from 'styled-components'
import { Head, apiData, FullWindow, FitImage, BgStroke } from './../components'
import { StyledMarkup } from './../styles/components'
import { animationRotate, animationFadeIn } from './../styles/mixins'
import AboutContent from './about-components/AboutContent'
import { meta_defaults } from './../../config.json'

export default apiData(props =>
  <React.Fragment>
    <Head 
      title={`Home`}
      description={props.options.about_meta || meta_defaults.description}
    />
    <Transition
      from={{ opacity: 0, transform: `matrix3d(-1.45, 0.02, 0.00, 0.0005, 0.025, -1.45,0.00,0.0001,0,0,1,0,0,0,10,1)` }}
      enter={{ opacity: 1, transform: `transform: matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,0,0,1)` }}
      leave={{ opacity: 0, transform: `matrix3d(1.45, 0.02, 0.00, 0.0005, 0.025, 1.45,0.00,0.0001,0,0,1,0,0,0,10,1)`, pointerEvents: 'none' }}
    >
      {props && (styles =>
        <AboutContent 
          styles={styles} 
          contact_email_cta={props.options.contact_email_cta}
          contact_email={props.options.contact_email}
        >
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
              <FitImage src="assets/logo/trojan-logo-dk-green-globe.svg" fit={'contain'} />
            </div>
          </LogoWrap>
          <BgStroke />
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