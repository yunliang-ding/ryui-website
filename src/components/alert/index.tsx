import * as React from "react"
import './index.less'
import { Alert, Button } from '../../Yui/index'
import { observer, inject } from 'mobx-react'
@inject('UI')
@observer
export default class extends React.Component {
  state = {
    show1: false,
    show2: false,
    show3: false,
    show4: false
  }
  setClose = (key, value) => {
    this.setState({
      [key]: value
    })
  }
  props: any
  render() {
    const { dark } = this.props.UI
    return (
      <div className="app-alert">
        <div style={{ height: 60 }}>
          <Button dark={dark} type={dark ? "normal" : 'primary'} style={{ width: 100 }} label="基本提示框" onClick={
            () => {
              this.setClose('show1', true)
            }
          } /><br />
          <Alert dark={dark} show={this.state.show1} title={'我是提示框'} okText={'我知道了'} onOk={
            () => {
              this.setClose('show1', false)
              alert('我知道了')
            }
          } onClose={
            () => {
              this.setClose('show1', false)
            }
          }>
            这个是一个提示信息
          </Alert>
          <Button dark={dark} type={dark ? "normal" : 'primary'} style={{ width: 100 }} label="基本询问框" onClick={
            () => {
              this.setClose('show2', true)
            }
          } />
          <Alert dark={dark} show={this.state.show2} title={'我是询问框'} cancelText={'取消'} okText={'确定'} onCancel={
            () => {
              this.setClose('show2', false)
              alert('取消');
            }
          } onOk={
            () => {
              this.setClose('show2', false)
              alert('确定');
            }
          } onClose={
            () => {
              this.setClose('show2', false)
            }
          }>
            你要删除这个信息吗？
          </Alert>
        </div>
      </div>
    )
  }
}
