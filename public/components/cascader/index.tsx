import React from 'react'
import ReactDom from 'react-dom'
import { Cascader } from 'Yui'
class Demo extends React.Component {
  render() {
    const dark = true
    return (
      <div className="app-preview">
        <Cascader dark={dark} style={{width: 200}} />
      </div>
    )
  }
}
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))