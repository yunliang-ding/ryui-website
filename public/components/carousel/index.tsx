// @ts-nocheck
import React from 'react'
import ReactDom from 'react-dom'
import { Carousel } from 'ryui'
class Demo extends React.Component {
  render() {
    return (
      <div className="app-preview">
        <Carousel />
      </div>
    )
  }
}
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))