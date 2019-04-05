import React from 'react'
import { Transition } from 'react-spring'
import styled from 'styled-components'
import { ModalWrapper } from './../../styles/components'
import { defaultLink, media, buttonInit, flexColumn, flexColumnCentered, flexCenteredAll } from './../../styles/mixins'
import { Close, Modal, FitImage } from './../../components'
import { colors, fonts } from './../../styles/theme'
import TourWidget from './TourWidget'
import ListenBg from './../listen-components/ListenBg'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false
    }
    this._openPopup = this._openPopup.bind(this)
    this._closePopup = this._closePopup.bind(this)
  }
  
  _openPopup() {
    this.setState({
      modal: true
    })
  }
  
  _closePopup() {
    this.setState({
      modal: false
    })
  }

  render() {
    return (
      <React.Fragment>
        <TourButton onClick={() => this._openPopup()}>
          <div className='img-wrapper'>
            <FitImage src={this.props.data.artist_image} />
          </div>
          <div className='title-wrapper'>
            <p>{this.props.data.artist}</p>
          </div>
        </TourButton>
        <Transition from={{ opacity: 0 }} enter={{ opacity: 1 }} leave={{ opacity: 0, pointerEvents: 'none' }}>
          {this.state.modal && (styles => 
            <Modal>
              <TourModalWrapper style={styles}>
                <Close clickFunction={() => this._closePopup()} color={colors.green} bgColor={colors.red} />
                <Tours>
                  <TourListWrapper>
                    <TourContent>
                      <h2>{this.props.data.artist} | Tour Dates</h2>
                      <TourEmbedWrapper>
                        <TourWidget tour_embed={this.props.data.bands_in_town_embed}/>
                      </TourEmbedWrapper>
                    </TourContent>
                    <ListenBg color={colors.yellow} />
                  </TourListWrapper>
                </Tours>
              </TourModalWrapper>
            </Modal>
          )}
        </Transition>
      </React.Fragment>
    )
  }
}

const TourModalWrapper = styled.div`
  ${flexCenteredAll};
  position: fixed;
  z-index: 10000;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,.45);
`

const TourListWrapper = styled.section`
	width: 100%;
	padding: 3rem;
	margin: auto;
	display: flex;
	min-height: 45rem;
`

const Tours = styled.div`
	width: 100%;
	position: relative;
  max-width: 86rem;
`

const TourButton = styled.button`
  ${buttonInit};
  width: 100%;
  position: relative;
  padding: 1rem;
  &:hover {
    .title-wrapper {
      opacity: 1;
    }
    .img-wrapper {
      transform: scale(1.05) rotate(2.5deg);
    }
  }
  .title-wrapper {
    width: 100%;
    position: relative;
    opacity: 0;
    will-change: all;
    transition: all 250ms ease;
    padding-top: .5rem;
    transform: rotate(-1.95deg);
    p {
      font-family: ${fonts.akzidenz};
      text-transform: uppercase;
      font-size: 1.25rem;
    }
  }
  .img-wrapper {
    width: 100%;
    height: 0;
    overflow-y: visible;
    padding-bottom: 100%;
    position: relative;
    transition: transform 250ms ease;
    will-change: transform;
  }
`

const TourContent = styled.div`
  ${flexColumn};
  width: 100%;
  position: relative;
  z-index: 1000;
  padding: 4rem;
  h2 {
    font-family: 'Eurostile Extd', sans-serif;
    font-style: normal;
    font-weight: 800;
    text-align: center;
    width: 100%;
    color: #fc0d1b;
    text-transform: uppercase;
    font-size: 2.5rem;
    max-width: 65rem;
    margin: 0 auto 1.5rem;
  }
`

const TourEmbedWrapper = styled.div`
  width: 100%;
  position: relative;
  min-height: 45rem;
  padding-left: 2rem;
  padding-right: 2rem;
  left: 0;
  display: flex;
  overflow-y: scroll;
  padding-top: 3rem;
  padding-bottom: 1.5rem;
  -webkit-overflow-scrolling: touch;
  a {
    ${defaultLink};
    color: ${colors.blue};
  }
`
