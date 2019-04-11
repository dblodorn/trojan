import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import Duration from 'duration'
import ErrorBoundary from './../utils/ErrorBoundary'
import { setAudioPlaying } from './../../state/actions'
import { flexRow, flexColumnCentered, flexRowCenteredVert, buttonInit, media, absoluteCentered, flexColumn } from './../../styles/mixins'
import { spacing, colors, heights } from './../../styles/theme'
import AudioPlayButton from './AudioPlayButton'
import AudioPauseButton from './AudioPauseButton'
import HoverBg from './../navigation/HoverBg'
import Ticker from './../Ticker'

class AudioPlayer extends React.Component {
  state = {
    url: null,
    playing: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    started: false,
    duration: 0,
    playbackRate: 1.0,
    loop: true,
    buffering: false
  }
  componentWillMount() {
    this.props.audioControl(true)
  }
  componentWillUnmount() {
    this.props.audioControl(false)
  }
  playPause = () => {
    this.setState({ playing: !this.state.playing })
    this.props.audioControl(!this.props.audioPlayingState)
  }
  stop = () => {
    this.setState({ url: null, playing: false })
    this.props.audioControl(false)
  }
  onPlay = () => {
    this.setState({ playing: true })
    this.props.audioControl(true)
  }
  onPause = () => {
    this.setState({ playing: false })
    this.props.audioControl(false)
  }
  onStart = () => {
    this.setState({ started: true })
    this.props.audioControl(true)
  }
  onSeekMouseDown = e => {
    this.setState({ seeking: true })
  }
  onSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) })
  }
  onSeekMouseUp = e => {
    this.setState({ seeking: false })
    this.player.seekTo(parseFloat(e.target.value))
  }
  setVolume = e => {
    this.setState({ volume: parseFloat(e.target.value) })
  }
  onProgress = state => {
    if (this.props.artistPopup) {
      this.props.audioControl(false)
      this.player.seekTo(0)
    }
    if (!this.state.seeking) {
      this.setState(state)
    }
  }
  onDuration = (duration) => {
    this.setState({ duration })
  }
  onEnded = () => {
    this.props.audioControl(false)
    this.setState({ playing: this.state.loop })
  }
  ref = player => {
    this.player = player
  }
  render() {
    return (
      <PlayerContainer>
        <PlayerWrapper>
          <ErrorBoundary>
            <Ticker copy={this.props.title}/>
            <Controls>
              <PlayPause>
                <PlayButton onClick={this.playPause}>
                  {(this.props.audioPlayingState)
                    ? <AudioPauseButton/>
                    : <AudioPlayButton/>
                  }
                </PlayButton>
                <Seek>
                  <SeekInput
                    type='range' min={0} max={1} step='any'
                    value={this.state.played}
                    onMouseDown={this.onSeekMouseDown}
                    onChange={this.onSeekChange}
                    onMouseUp={this.onSeekMouseUp}
                  />
                </Seek>
              </PlayPause>
            </Controls>
            <Video>
              <ReactPlayer
                url={this.props.song}
                ref={this.ref}
                volume={this.state.volume}
                playing={this.props.audioPlayingState}
                onStart={this.onStart}
                onPlay={this.onPlay}
                onPause={this.onPause}
                onProgress={this.onProgress}
                onDuration={this.onDuration}
                onEnded={this.onEnded}
                config={{
                  youtube: {
                    playerVars: {showinfo: 0, controls: 0, modestbranding: 1, rel: 0, playsinline: 1}
                  }
                }}/>
            </Video>
          </ErrorBoundary>
        </PlayerWrapper>
        <BgA>
          <HoverBg color={colors.green}/>
        </BgA>
        <BgBg>
          <HoverBg color={colors.black}/>
        </BgBg>
      </PlayerContainer>
    )
  }
}

export default connect(
  state => ({
    audioPlayingState: state.audioPlayingState,
    artistPopup: state.currentArtist,
  }),
  dispatch => ({
    audioControl: (bool) => dispatch(setAudioPlaying(bool))
  })
)(AudioPlayer)

// STYLES
const Controls = styled.div`
  ${flexColumnCentered};
  width: 100%;
  position: absolute;
  bottom: 1rem;
  left: 0;
`

const PlayPause = styled.div`
  ${flexRow};
  padding: ${spacing.micro_pad};
  width: 100%;
`
const PlayButton = styled.button`
  ${buttonInit};
  width: 3.5rem;
  height: 3.5rem;
  padding: 0;
  border: 0;
  border-radius: 0;
  margin-right: ${spacing.micro_pad};
  ${media.medium`
    height: ${heights.player_icons};
  `}
`

const Seek = styled.div`
  ${flexRowCenteredVert};
  width: 100%;
  height: 3.5rem;
  ${media.medium`
    height: ${heights.player_icons};
  `}
`
const SeekInput = styled.input`
  -webkit-appearance: none;
  width: 100%;
  background: transparent;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 3.5rem;
    width: 8px;
    cursor: pointer;
    margin-top: calc((-3.5rem / 2) + 1px);
    background-image: url('/assets/audio-progress.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    display: block;
    border: 0;
    ${media.medium`
      margin-top: calc((-${heights.player_icons} / 2) + 1px);
      height: ${heights.player_icons};
      width: 8px;
    `}
  }
  &:focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    background: ${colors.red};
  }
  &:focus::-webkit-slider-runnable-track {
    background: ${colors.red};
  }
`

const PlayerContainer = styled.div`
  width: 30rem;
  height: 10rem;
  display: block;
  position: fixed;
  bottom: 2rem;
  right: 1rem;
  z-index: 1000;
  transform: rotate(3deg);
`

const BgA = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`

const BgBg = styled.div`
  width: 100%;
  height: 102%;
  position: absolute;
  top: -1px;
  left: 3px;
  z-index: 0;
`

const PlayerWrapper = styled.div`
  ${absoluteCentered};
  ${flexColumn};
  display: flex;
  justify-content: flex-start;
  width: 80%;
  height: 8rem;
  z-index: 100;
  top: 2rem!important;
`

const Video = styled.div`
  width: 0;
  height: 0;
  overflow: hidden;
  display: block;
  padding: 0;
  margin: 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
`