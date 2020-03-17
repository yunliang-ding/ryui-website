import * as React from "react"
import { Router, hashHistory, Route, Redirect, IndexRoute} from 'react-router'
import { Layout } from './layout/index'
import Input from './components/input/index'
import Select from './components/select/index'
import Button from './components/button/index'
import CheckBox from './components/checkbox/index'
import Radio from './components/radio/index'
import Alert from './components/alert/index'
import Table from './components/table/index'
import Pagination from './components/pagination/index'
import Loading from './components/loading/index'
import Nav from './components/nav/index'
import Tab from './components/tab/index'
import Tree from './components/tree/index'
export default class extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Redirect from='/' to='input'/>
        <Route path='/' component={Layout}>
          <IndexRoute component={Input} />
          <Route path='input' component={Input} />
          <Route path='select' component={Select} />
          <Route path='button' component={Button} />
          <Route path='checkbox' component={CheckBox} />
          <Route path='radio' component={Radio} />
          <Route path='alert' component={Alert} />
          <Route path='table' component={Table} />
          <Route path='pagination' component={Pagination} />
          <Route path='loading' component={Loading} />
          <Route path='nav' component={Nav} />
          <Route path='tab' component={Tab} />
          <Route path='tree' component={Tree} />
        </Route>
      </Router>
    )
  }
}