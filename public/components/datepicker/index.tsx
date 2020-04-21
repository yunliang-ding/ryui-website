// @ts-nocheck
import React from 'react'
import ReactDom from 'react-dom'
import { DatePicker } from 'ryui'
class Demo extends React.Component {
  render() {
    return (
      <div className="app-preview">
        <DatePicker style={{width:200}} placeholder='选择日期' />
      </div>
    )
  }
}
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))