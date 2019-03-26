import React from 'react'
import { Transition } from 'react-spring'
import styled from 'styled-components'
import { Head, apiData, FullWindow, FitImage } from './../components'
import { } from './../styles/components'
import { } from './../styles/mixins'
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
            <FitImage src="assets/imgs/bg-home.svg"/>
          </HomeBgWrapper>
        </FullWindow>
      )}
    </Transition>
  </React.Fragment>
)

const HomeBgWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  img {
    width: auto;
    height: 100%;
  }
`