import * as React from "react"
import { Router, hashHistory, Route, Redirect } from 'react-router'
import { Layout } from './layout/index'
export default class extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Redirect from='/' to='input'/>
        <Route path='*' component={Layout}></Route>
      </Router>
    )
  }
}