import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Document from './Document'
import { NotFound, Home } from './views'

const Routes = props => 
  <Document>
    <Router>
      <Switch>
        {(props.apiData) && <Route exact path={'/'} component={Home}/>}
        <Route component={NotFound}/>
      </Switch>
    </Router>
  </Document>

export default connect(
  state => ({
    apiData: state.apiData
  })
)(Routes)
