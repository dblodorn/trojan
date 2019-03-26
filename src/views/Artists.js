import React from 'react'
import styled from 'styled-components'
import { Transition } from 'react-spring'
import { Head, apiData, FullWindow, FitImage } from './../components'
import { } from './../styles/components'
import { animationRotate } from './../styles/mixins'
import { colors } from './../styles/theme'

export default apiData(props =>
  <React.Fragment>
    <Head title={`Artists`} />
    <Transition
    from={{ opacity: 0, transform: `matrix3d(-1.45, 0.02, 0.00, 0.0005, 0.025, -1.45,0.00,0.0001,0,0,1,0,0,0,10,1)` }}
    enter={{ opacity: 1, transform: `transform: matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,0,0,1)` }}
    leave={{ opacity: 0, transform: `matrix3d(1.45, 0.02, 0.00, 0.0005, 0.025, 1.45,0.00,0.0001,0,0,1,0,0,0,10,1)`, pointerEvents: 'none' }}
    >
      {props && (styles =>
        <div style={styles}>
          <FullWindow zindex={0} bgcolor={colors.bright_red}>
            <ArtBg>
              <div className='inner-wrapper'>
                <FitImage src="assets/imgs/artists-bg.svg" fit={'contain'} />
              </div>
            </ArtBg>
          </FullWindow>
        </div>
    )}
  </Transition>
  </React.Fragment>
)

const ArtBg = styled.div`
  
  width: 100vw;
  max-width: 1000rem;
  height: 100vh;
  margin: auto;
  position: relative;
  margin: auto;
  padding: 2.5vh;
  .inner-wrapper {
    ${animationRotate(45000)};
    width: 100%;
    height: 100%;
    position: relative;
  }
`