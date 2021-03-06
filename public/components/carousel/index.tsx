// @ts-nocheck
import React from 'react'
import ReactDom from 'react-dom'
import { Carousel } from 'react-ryui'
const style = {
  background: 'var(--theme-color)',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}
class Demo extends React.Component {
  render() {
    const pages = [
      <div style={style}>page1</div>,
      <div style={style}>page2</div>,
      <div style={style}>page3</div>,
      <div style={style}>page4</div>
    ]
    return (
      <div className="app-preview">
        <div style={{
          height: '100%',
          overflow: 'auto'
        }}>
          <Carousel
            style={{ width: 500, height: 240 }}
            pages={pages}
          />
          <br /><br />
          <Carousel
            style={{ width: 500, height: 240 }}
            pages={pages}
            currentPage={2}
          />
          <br /><br />
          <Carousel
            style={{ width: 500, height: 240 }}
            pages={pages}
            autoplay
          />
          <br /><br />
          <Carousel
            style={{ width: 500, height: 240 }}
            pages={pages}
            autoplay
            effect='fade'
          />
        </div>
      </div>
    )
  }
}
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))