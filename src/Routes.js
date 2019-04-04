import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Document from './Document'
import NotFound from './views/NotFound'
import Home from './views/Home'
import Artists from './views/Artists'
import Listen from './views/Listen'
import Live from './views/Live'
import About from './views/About'
import Release from './views/Release'

export default () =>
  <Document>
    <Switch>
      <Route exact path={'/'} component={props => <Home {...props} />} />
      <Route exact path={'/artists'} component={props => <Artists {...props} />} />
      <Route exact path={'/listen'} component={props => <Listen {...props} />} />
      <Route exact path={'/live'} component={props => <Live {...props} />} />
      <Route exact path={'/about'} component={props => <About {...props} />} />
      <Route exact path={'/release/:id'} component={props => <Release {...props} />} />
      <Route component={NotFound} />
    </Switch>
  </Document>
