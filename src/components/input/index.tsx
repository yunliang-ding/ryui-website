import * as React from "react"
import { Input } from '../../Yui/index'
import './index.less'
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
    return (
      <div className="app-input">
        <div style={{ width: 300, marginBottom: 20 }}>
          <Input placeholder='姓名' value={this.state.value} onChange={
            (e) => {
              this.setValue(e.target.value)
            }
          } />
        </div>
        <div style={{ width: 300, marginBottom: 20 }}>
          <Input readonly={true} placeholder='姓名' value={this.state.value} />
        </div>
        <div style={{ width: 300, marginBottom: 20 }}>
          <Input placeholder='姓名' value={this.state.value} onChange={
            (e) => {
              this.setValue(e.target.value)
            }
          } addonBefore='姓名' />
        </div>
        <div style={{ width: 300, marginBottom: 20 }}>
          <Input placeholder='姓名' value={this.state.value} onChange={
            (e) => {
              this.setValue(e.target.value)
            }
          } addonAfter={<i className="iconfont icon-huanfu1" style={{ color: '#16b4a7' }} />} />
        </div>
        <div style={{ width: 300, marginBottom: 20 }}>
          <Input placeholder='姓名' value={this.state.value} onChange={
            (e) => {
              this.setValue(e.target.value)
            }
          } />
        </div>
        <div style={{ width: 300, marginBottom: 20 }}>
          <Input type="textArea" placeholder='姓名' value={this.state.value} onChange={
            (e) => {
              this.setValue(e.target.value)
            }
          } />
        </div>
      </div>
    )
  }
}
