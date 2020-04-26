// @ts-nocheck
import React from 'react'
import ReactDom from 'react-dom'
import { Carousel } from 'ryui'
class Demo extends React.Component {
  render() {
    const pages = [<div>page1</div>, <div>page2</div>, <div>page3</div>, <div>page4</div>,]
    return (
      <div className="app-preview">
        <Carousel
          style={{ width: 500, height: 400 }}
          pages={pages}
          currentPage={2}
        />
      </div>
    )
  }
}
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))