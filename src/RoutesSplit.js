import React, { Suspense, lazy } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import Document from './Document'
import Loading from './components/Loading'

const Home = lazy(() => import( /* webpackChunkName: "HOME" */ './views/Home'));
const Artists = lazy(() => import( /* webpackChunkName: "ARTISTS" */ './views/Artists'));
const Listen = lazy(() => import( /* webpackChunkName: "LISTEN" */ './views/Listen'));
const Live = lazy(() => import( /* webpackChunkName: "LIVE" */ './views/Live'));
const About = lazy(() => import( /* webpackChunkName: "ABOUT" */ './views/About'));
const NotFound = lazy(() => import( /* webpackChunkName: "NOT_FOUND" */ './views/NotFound'));

const Routes = props =>
  <Suspense fallback={<Loading />}>
    <Document>
      <Switch>
        <Route exact path={'/'} component={props => <Home {...props} />} />
        <Route exact path={'/artists'} component={props => <Artists {...props} />} />
        <Route exact path={'/listen'} component={props => <Listen {...props} />} />
        <Route exact path={'/live'} component={props => <Live {...props} />} />
        <Route exact path={'/about'} component={props => <About {...props} />} />
        <Route component={NotFound} />
      </Switch>
    </Document>
  </Suspense>

export default connect(
  state => ({
    apiData: state.apiData
  })
)(Routes)
