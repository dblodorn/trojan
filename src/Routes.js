import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import Document from './Document'
import Home from './views/Home'
import Artists from './views/Artists'
import Listen from './views/Listen'
import Live from './views/Live'
import About from './views/About'
import NotFound from './views/NotFound'

const Routes = props =>
  <Document>
    <Switch>
      {(props.apiData) && <Route exact path={'/'} component={Home} />}
      {(props.apiData) && <Route exact path={'/about'} component={About} />}
      {(props.apiData) && <Route exact path={'/live'} component={Live} />}
      {(props.apiData) && <Route exact path={'/listen'} component={Listen} />}
      {(props.apiData) && <Route exact path={'/artists'} component={Artists} />}
      <Route component={NotFound} />
    </Switch>
  </Document>

export default connect(
  state => ({
    apiData: state.apiData
  })
)(Routes)
