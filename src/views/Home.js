import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Head } from './../components'

const Home = props => 
  <Fragment>
    <Head title={`Home`} />
  </Fragment>

export default connect(
  state => ({
    apiData: state.apiData,
    resizeState: state.resizeState
  })
)(Home)
