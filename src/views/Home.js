import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Head, VideoModal, Ticker } from './../components'

const Home = props => 
  <Fragment>
    <Head title={`Home`} />
    <VideoModal/>
    <Ticker/>
  </Fragment>

export default connect(
  state => ({
    apiData: state.apiData,
    resizeState: state.resizeState
  })
)(Home)
