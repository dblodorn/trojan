import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Transition } from 'react-spring'
import { Head, apiData, FullWindow, FitImage, VideoModal } from './../components'
import { } from './../styles/components'
import { animationRotate, animationFadeIn } from './../styles/mixins'
import { colors } from './../styles/theme'
import paperInit from './../paper'

class Artists extends React.Component {
  constructor (props) {
    super(props)
    this.wrapper = document.getElementById('canvas-wrapper');
  }
  

  componentWillMount() {
    paperInit(true)
    this.wrapper.classList.add('show');
  }

  componentWillUnmount() {
    paperInit(false)
    this.wrapper.classList.remove('show');
  }

  render() {
    return (
      <React.Fragment>
        <Head title={`Artists`} />
        <Transition
        from={{ opacity: 0, transform: `matrix3d(-1.45, 0.02, 0.00, 0.0005, 0.025, -1.45,0.00,0.0001,0,0,1,0,0,0,10,1)` }}
        enter={{ opacity: 1, transform: `transform: matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,0,0,1)` }}
        leave={{ opacity: 0, transform: `matrix3d(1.45, 0.02, 0.00, 0.0005, 0.025, 1.45,0.00,0.0001,0,0,1,0,0,0,10,1)`, pointerEvents: 'none' }}
        >
          {this.props && (styles =>
            <FullWindow zindex={0} bgcolor={colors.bright_red} styles={styles}>
              <ArtBg>
                <div className='inner-wrapper'>
                  <FitImage src="assets/logo/trojan-logo-orange-globe.svg" fit={'contain'} />
                </div>
              </ArtBg>
            </FullWindow>
          )}
        </Transition>
        <VideoModal />
      </React.Fragment>
    )
  }
}

export default connect(
  state => ({
    apiData: state.apiData,
    router: state.router,
    resizeState: state.resizeState
  })
)(Artists)

const ArtBg = styled.div`  
  width: 100vw;
  max-width: 1000rem;
  height: 100vh;
  margin: auto;
  position: relative;
  margin: auto;
  padding: 2.5vh;
  ${animationFadeIn(1000, 500)};
  .inner-wrapper {
    ${animationRotate(45000)};
    width: 100%;
    height: 100%;
    position: relative;
  }
`