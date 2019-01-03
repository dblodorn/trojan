import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import styled, { createGlobalStyle } from 'styled-components'
import { flexColumn } from './styles/mixins'
import { Header } from './components'
import { LoadingPage } from './views'

const Document = props => {
  if (props.apiData) {
    return (
      <Fragment>
        <GlobalStyles/>
        <Header/>
        <Main>
          {props.children}
        </Main>
      </Fragment>
    )
  } else {
    return <LoadingPage/>
  }
}

export default connect(
  state => ({
    apiData: state.apiData,
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
    
  }
  ::-webkit-input-placeholder,
  ::-moz-placeholder {
    color: white;
    font-size: 15vmin;
  }
`
