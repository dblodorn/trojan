import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Head } from './../components'

const Live = props => 
  <Fragment>
    <Head title={`Live`} />
  </Fragment>

export default connect(
  state => ({
    apiData: state.apiData
  })
)(Live)
