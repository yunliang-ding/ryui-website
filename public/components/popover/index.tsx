import React from 'react'
import ReactDom from 'react-dom'
import { Popover, Button } from 'Yui'
class Demo extends React.Component {
  render() {
    const dark = true
    return (
      <div className="app-preview">
        <Popover
          dark={dark}
          content={<div style={{ width: 100, padding: 8 }}>
            <div>item1</div>
            <div>item2</div>
            <div>item3</div>
          </div>}
          placement='right'
        >
          <Button dark={dark} style={{ width: 100 }} label="Click" />
        </Popover>
        <br /><br />
        <Popover
          dark={dark}
          content={<div style={{ width: 100, padding: 8 }}>
            <div>item1</div>
            <div>item2</div>
            <div>item3</div>
          </div>}
          placement='bottom'
          trigger='hover'
        >
          <Button dark={dark} style={{ width: 100 }} label="Hover" />
        </Popover>
      </div>
    )
  }
}
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))
