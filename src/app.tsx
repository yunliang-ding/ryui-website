import * as React from "react"
import { Provider } from 'mobx-react'
import store from './store/index'
import Router from './router'
class App extends React.Component{
  constructor(props){
    super(props)
  }
  render () {
    return <Provider {...store}>
      <Router />
    </Provider>
  }
}
export { App }