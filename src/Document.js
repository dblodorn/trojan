import React from 'react'
import { connect } from 'react-redux'
import styled, { createGlobalStyle } from 'styled-components'
import { flexColumn } from './styles/mixins'
import { Header, ImageLoader, ResponsiveWrapper, HeaderMobile, AudioPlayer } from './components'

const Document = props =>
  <React.Fragment>
    <GlobalStyles />
    {props.apiData &&
      <React.Fragment>
        <ResponsiveWrapper
          desktop={<Header/>}
          mobile={<HeaderMobile/>}
        />
        <Main>
          {props.children}
        </Main>
        <AudioPlayer song={props.apiData.options.song_url}/>
        <ImageLoader artists={props.apiData.artists}/>
      </React.Fragment>
    }
  </React.Fragment>

export default connect(
  state => ({
    apiData: state.apiData,
    router: state.router,
    resizeState: state.resizeState
  })
)(Document)

// MAIN STYLING
const Main = styled.main`
  ${flexColumn};
  width: 100vw;
  position: relative;
`

// NORMALIZE CSS
const GlobalStyles = createGlobalStyle`
  html {
    font-size: 58%;
  }
  @media screen and (min-width: 960px) {
    html {
      font-size: 62.5%;
    }
  }
  @media screen and (min-width: 1550px) {
    html {
      font-size: 66.5%;
    }
  }
  @media screen and (min-width: 1750px) {
    html {
      font-size: 68.5%;
    }
  }
  body {
    font-family: arial;
    font-weight: 300;
    font-style: normal;
    text-decoration: none;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  ::-webkit-input-placeholder,
  ::-moz-placeholder {
    color: white;
    font-size: 15vmin;
  }
`
