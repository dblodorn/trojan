import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Transition } from 'react-spring'
import { flexCenteredAll } from './../../styles/mixins'
import { setArtist, setArtistPopup } from './../../state/actions'
import Modal from './../Modal'
import Video from './Video'

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
            <Video data={props.currentArtist} clickFunction={() => clickHandler()}/>
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

const ModalWrapper = styled.div`
  ${flexCenteredAll};
  position: fixed;
  z-index: 10000;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,.85);
`