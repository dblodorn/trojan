import React, { Component } from 'react'
import { Router } from 'react-router-dom'
import { connect } from 'react-redux'
import { setPageCount, setRoute } from './state/actions'
import Routes from './Routes'

class App extends Component {
  constructor(props) {
    super(props)
    this.props.history.listen(() => {
      window.scrollTo(0, 0)
      this.props.set_pageCount(this.props.pageCount + 1)
      this.props.set_route(this.props.history.location.pathname)
    })
  }
  componentWillMount() {
    this.props.set_route(this.props.history.location.pathname)
  }
  render() {
    return (
      <Router history={this.props.history}>
        <Routes />
      </Router>
    )
  }
}

export default connect(
  state => ({
    pageCount: state.pageCount
  }),
  dispatch => ({
    set_pageCount: (bool) => dispatch(setPageCount(bool)),
    set_route: (route) => dispatch(setRoute(route))
  })
)(App)
