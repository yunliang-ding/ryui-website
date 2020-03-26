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
      <Input
        dark={dark}
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
        dark={dark}
        style={{ width: 300 }}
        readonly={true}
        placeholder='姓名'
        value={this.state.value}
      />
      <br />
      <Input
        dark={dark}
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
        dark={dark}
        style={{ width: 250 }}
        placeholder='姓名'
        value={this.state.value}
        onChange={
          (e) => {
            this.setValue(e.target.value)
          }
        }
        addonAfter={<i className="iconfont icon-chazhao" />}
      />
      <br />
      <Input
        dark={dark}
        type='date'
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
        dark={dark}
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

