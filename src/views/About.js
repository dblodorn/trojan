import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Head, VideoModal, Ticker } from './../components'

const About = props => 
  <Fragment>
    <Head title={`About`} />
    <h1>ABOUT</h1>
  </Fragment>

export default connect(
  state => ({
    apiData: state.apiData
  })
)(About)
