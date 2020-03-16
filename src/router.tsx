import * as React from "react"
import { Router, hashHistory, Route, Redirect, IndexRoute} from 'react-router'
import { Layout } from './layout/index'
import Input from './components/input/index'
export default class extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Redirect from='/' to='input'/>
        <Route path='/' component={Layout}>
          <IndexRoute component={Input} />
          <Route path='input' component={Input} />
        </Route>
      </Router>
    )
  }
}