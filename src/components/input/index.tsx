import * as React from "react"
import { Input } from '../../Yui/index'
import './index.less'
import { observer, inject } from 'mobx-react'
@inject('UI')
@observer
export default class extends React.Component {
  props: any;
  state = {
    value: ''
  }
  setValue = (value) => {
    this.setState({
      value
    })
  }
  render() {
    const { dark } = this.props.UI
    return <div className="app-input">
      <div style={{ width: 300, marginBottom: 20 }}>
        <Input dark={dark} placeholder='姓名' value={this.state.value} onChange={
          (e) => {
            this.setValue(e.target.value)
          }
        } />
      </div>
      <div style={{ width: 300, marginBottom: 20 }}>
        <Input dark={dark} readonly={true} placeholder='姓名' value={this.state.value} />
      </div>
      <div style={{ width: 300, marginBottom: 20 }}>
        <Input dark={dark} placeholder='姓名' value={this.state.value} onChange={
          (e) => {
            this.setValue(e.target.value)
          }
        } addonBefore='姓名' />
      </div>
      <div style={{ width: 300, marginBottom: 20 }}>
        <Input dark={dark} placeholder='姓名' value={this.state.value} onChange={
          (e) => {
            this.setValue(e.target.value)
          }
        } addonAfter={<i className="iconfont icon-chazhao" style={{ color: 'var(--theme-color)' }} />} />
      </div>
      <div style={{ width: 300, marginBottom: 20 }}>
        <Input dark={dark} placeholder='姓名' value={this.state.value} onChange={
          (e) => {
            this.setValue(e.target.value)
          }
        } />
      </div>
      <div style={{ width: 300, marginBottom: 20 }}>
        <Input dark={dark} type="textArea" placeholder='姓名' value={this.state.value} onChange={
          (e) => {
            this.setValue(e.target.value)
          }
        } />
      </div>
    </div>
  }
}
