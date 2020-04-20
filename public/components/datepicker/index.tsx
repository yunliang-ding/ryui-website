// @ts-nocheck
import React from 'react'
import ReactDom from 'react-dom'
import { DatePicker } from 'ryui'
class Demo extends React.Component {
  render() {
    return (
      <div className="app-preview">
        <DatePicker />
      </div>
    )
  }
}
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))