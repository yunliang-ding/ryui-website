import React from 'react'
import ReactDom from 'react-dom'
import { Input } from 'Yui'
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
    const dark = true
    return <div className="app-preview">
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
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))

    