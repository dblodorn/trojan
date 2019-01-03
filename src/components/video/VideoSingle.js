import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Transition } from 'react-spring'
import { setHeaderState, setVideoPlaying } from './../../state/actions'
import { randomNum } from './../../scripts'
import BackClose from './../utils/BackClose'
import { PrevButton, NextButton } from './../utils/PrevNextButton'
import { breakpoints } from './../../styles/theme.json'
import { PatternWrapper } from './../../styles/components'
import HeaderStripDesk from './../header/HeaderStripDesk'
import Video from './Video'
import Modal from './../Modal'
import FitImage from './../utils/FitImage'
import { HEADER_MENU } from './../../config.json'

const returnSlug = slug => slug.split('/')[2]

class VideoSingle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slug: returnSlug(this.props.router),
      next: false,
      prev: false,
      nav: false,
      pattern: 1
    }
  }
  
  componentWillMount() {
    this.setState({pattern: randomNum(1, 14)})
    setTimeout(() => {
      this.props.setVideo(this.state.slug)
      if (this.props.page_count !== 0) {
        this.props.headerState(false)
        this.setState({
          next: this.props.videos[this.props.current_video.video_index.next_project].slug,
          prev: this.props.videos[this.props.current_video.video_index.prev_project].slug,
          nav: true
        })
      }
    }, 1)
  }

  componentWillUnmount() {
    this.props.setVideo(null)
    if (this.props.page_count !== 0) {
      this.props.headerState(true)
    }
  }

  componentDidUpdate(prevProps) {
    const update_route = returnSlug(this.props.router)
    const prev_route = returnSlug(prevProps.router)
    if (update_route !== prev_route) {
      this.props.setVideo(null)
      setTimeout(() => {
        this.props.setVideo(update_route)
        this.setState({
          next: this.props.videos[this.props.current_video.video_index.next_project].slug,
          prev: this.props.videos[this.props.current_video.video_index.prev_project].slug,
        })
      }, 250)
    }
  }

  render() {
    return (
      <Fragment>
        <Modal>
          {((this.props.page_count === 0) && this.props.resize_state.window_width >= breakpoints.desktop) && <HeaderStripDesk menu={HEADER_MENU}/>}
          {((this.props.page_count !== 0) || this.props.resize_state.window_width < breakpoints.desktop) && <BackClose/>}
          {((this.props.resize_state.window_width >= breakpoints.desktop) && this.state.nav) &&
            <Fragment>
              <NextButton link={`/video/${this.state.next}`} clickFunction={() => this._nextVid()}/>
              <PrevButton link={`/video/${this.state.prev}`} clickFunction={() => this._prevVid()}/>
            </Fragment>
          }
          <Transition from={{ opacity: 0 }} enter={{ opacity: 1 }} leave={{ opacity: 0, pointerEvents: 'none' }}>
            {this.props.current_video !== null && (styles => 
              <VideoWrapper style={styles}>
                <Video data={this.props.current_video}/>
              </VideoWrapper>
            )}
          </Transition>
          <PatternWrapper>
            <FitImage src={`assets/patterns/pattern${this.state.pattern}.svg`} />
          </PatternWrapper>
        </Modal>
      </Fragment>
    )
  }
}

export default connect(
  state => ({
    current_video: state.current_video,
    videos: state.videos,
    resize_state: state.resize_state,
    page_count: state.page_count,
    router: state.router.location.pathname
  }),
  dispatch => ({
    headerState: (bool) => dispatch(setHeaderState(bool)),
    setVideo: (bool) => dispatch(setVideoPlaying(bool))
  })
)(VideoSingle)

const VideoWrapper = styled.div`
  display: block;
  position: relative;
  z-index: 1000;
`