import React from 'react'
import { connect } from 'react-redux'

const ResponsiveWrapper = props => {
  if (props.resizeState.window_width >= props.resizeState.breakpoints.desktop) {
    return <React.Fragment>{props.desktop}</React.Fragment>
  } else {
    return <React.Fragment>{props.mobile}</React.Fragment>
  }
}

export default connect(
  state => ({
    resizeState: state.resizeState
  })
)(ResponsiveWrapper)