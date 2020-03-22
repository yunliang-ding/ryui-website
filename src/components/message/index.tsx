import * as React from "react"
import './index.less'
import { Message, Button } from '../../Yui/index'
import { observer, inject } from 'mobx-react'
@inject('UI')
@observer
export default class extends React.Component {
  state = {
    loading: true
  }
  props: any
  render() {
    const { dark } = this.props.UI
    const message = new Message({
      duration: 3,
      dark
    })
    return (
      <div className="app-message">
        <Button dark={dark} label='success' style={{width:100}} onClick={
          () => {
            message.success('success!')
          }
        } />
        <br />
        <Button dark={dark} label='error' style={{width:100}}  onClick={
          () => {
            message.error(`Unable to open 'message': File is a directory.`)
          }
        } />
        <br />
        <Button dark={dark} label='warning' style={{width:100}}  onClick={
          () => {
            message.warning('warning!')
          }
        } />
        <br />
        <Button dark={dark} label='normal' style={{width:100}}  onClick={
          () => {
            message.normal('normal!')
          }
        } />
      </div>
    )
  }
}
