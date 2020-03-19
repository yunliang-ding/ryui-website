import * as React from "react"
import { Switch } from '../../Yui/index'
import './index.less'
import { observer, inject } from 'mobx-react'
@inject('UI')
@observer
export default class extends React.Component {
  props: any
  render() {
    const { dark } = this.props.UI
    return (
      <div className="app-switch">
        <Switch dark={dark} checked onChange={
          (e) => {
            console.log(e)
          }
        }/>
        <br />
        <Switch dark={dark} checked disabled onChange={
          (e) => {
            console.log(e)
          }
        }/>
      </div>
    )
  }
}
