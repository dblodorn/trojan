import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Transition } from 'react-spring'
import styled from 'styled-components'
import { colors } from './../../styles/theme.json'
import { ModalWrapper, PatternWrapper } from './../../styles/components'
import { absoluteTopFull } from './../../styles/mixins'
import { randomNum } from './../../scripts'
import { setVideoPlaying } from './../../state/actions'
import Modal from './../Modal'
import Video from './Video'
import FitImage from './../utils/FitImage'
import Close from './../utils/Close'
import PlayButton from './../utils/PlayButton'

class VideoModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      pattern: 1
    }
    this._openPopup = this._openPopup.bind(this)
    this._closePopup = this._closePopup.bind(this)
  }
  
  _openPopup(slug) {
    this.props.setVideo(slug)
    this.setState({
      modal: true
    })
  }
  
  _closePopup() {
    this.props.setVideo(null)
    this.setState({
      modal: false
    })
  }
  
  componentWillMount() {
    this.setState({
      pattern: randomNum(1, 14)
    })
  }
  render() {
    return (
      <Fragment>
        <VideoPopper>
          <PlayButton color={colors.white} clickFunction={() => this._openPopup(this.props.data.slug)}/>
          <FitImage src={this.props.thumbnail} srcset={true}/>
        </VideoPopper>
        <Transition from={{ opacity: 0 }} enter={{ opacity: 1 }} leave={{ opacity: 0, pointerEvents: 'none' }}>
          {this.state.modal && (styles => 
            <Modal>
              <ModalWrapper style={styles}>
                <Close clickFunction={() => this._closePopup()}/>
                {this.props.video !== null && <Video data={this.props.video}/>}
                <PatternWrapper>
                  <img src={`assets/patterns/pattern${this.state.pattern}.svg`} />
                </PatternWrapper>
              </ModalWrapper>
            </Modal>
          )}
        </Transition>
      </Fragment>
    )
  }
}

export default connect(
  state => ({
    resize_state: state.resize_state,
    video: state.current_video,
    videos: state.videos,
    router: state.router.location.pathname
  }),
  dispatch => ({
    setVideo: (bool) => dispatch(setVideoPlaying(bool))
  })
)(VideoModal)

const VideoPopper = styled.div`
  ${absoluteTopFull};
  overflow: hidden;
`