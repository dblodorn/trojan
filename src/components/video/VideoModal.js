import React from 'react'
import { connect } from 'react-redux'
import { Transition } from 'react-spring'
import styled from 'styled-components'
import { ModalWrapper } from './../../styles/components'
import { absoluteTopFull } from './../../styles/mixins'
import { setArtist, setArtistPopup } from './../../state/actions'
import Modal from './../Modal'
import Video from './Video'
import Close from './../utils/Close'

const VideoModal = props => {
  const clickHandler = () => {
    props.setArtist()
    props.setArtistPopup()
  }
  return (
    <Transition from={{ opacity: 0 }} enter={{ opacity: 1 }} leave={{ opacity: 0, pointerEvents: 'none' }}>
      {props.artistPopup && (styles => 
        <Modal>
          <ModalWrapper style={styles}>
            <Close clickFunction={() => clickHandler()}/>
            <Video data={props.currentArtist}/>
          </ModalWrapper>
        </Modal>
      )}
    </Transition>
  )
}

export default connect(
  state => ({
    resize_state: state.resize_state,
    router: state.router,
    artistPopup: state.artistPopup,
    currentArtist: state.currentArtist,
  }),
  dispatch => ({
    setArtist: () => dispatch(setArtist(false)),
    setArtistPopup: () => dispatch(setArtistPopup(false)),
  })
)(VideoModal)

const VideoPopper = styled.div`
  ${absoluteTopFull};
  overflow: hidden;
`