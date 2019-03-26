import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Head } from './../components'

const Listen = props => 
  <Fragment>
    <Head title={`Listen`} />
  </Fragment>

export default connect(
  state => ({
    apiData: state.apiData
  })
)(Listen)
