// @ts-nocheck
import React from 'react'
import ReactDom from 'react-dom'
import { Input } from 'react-ryui'
class Demo extends React.Component {
  state = {
    value: ''
  }
  setValue = (value) => {
    this.setState({
      value
    })
  }
  render() {
    return <div className="app-preview">
      <Input
        style={{ width: 300 }}
        placeholder='姓名'
        value={this.state.value}
        onChange={
          (e) => {
            this.setValue(e.target.value)
          }
        }
      />
      <br />
      <Input
        style={{ width: 300 }}
        readOnly={true}
        placeholder='姓名'
        value={this.state.value}
      />
      <br />
      <Input
        style={{ width: 250 }}
        placeholder='姓名'
        value={this.state.value}
        onChange={
          (e) => {
            this.setValue(e.target.value)
          }
        }
        addonBefore='姓名'
      />
      <br />
      <Input
        style={{ width: 250 }}
        placeholder='姓名'
        value={this.state.value}
        onChange={
          (e) => {
            this.setValue(e.target.value)
          }
        }
        addonAfter={<i className="iconfont icon-view-1" />}
      />
      <br />
      <Input
        style={{ width: 300 }}
        type="textArea"
        placeholder='姓名'
        value={this.state.value}
        onChange={
          (e) => {
            this.setValue(e.target.value)
          }
        }
      />
    </div>
  }
}
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))

