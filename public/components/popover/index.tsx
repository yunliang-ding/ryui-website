import React from 'react'
import ReactDom from 'react-dom'
import { Popover, Button } from 'Yui'
class Demo extends React.Component {
  render() {
    return (
      <div className="app-preview">
        <Popover
          content={<div style={{ width: 100, padding: 8 }}>
            <div>item1</div>
            <div>item2</div>
            <div>item3</div>
          </div>}
          trigger='hover'
          placement='right'
        >
          <Button style={{ width: 100 }} label="Hover" />
        </Popover>
        <br /><br />
        <Popover
          content={<div style={{ width: 100, padding: 8 }}>
            <div>item1</div>
            <div>item2</div>
            <div>item3</div>
          </div>}
          placement='bottom'
        >
          <Button style={{ width: 100 }} label="Click" />
        </Popover>
        <br /><br />
        <Popover
          content={<div style={{ width: 100, padding: 8 }}>
            <div>item1</div>
            <div>item2</div>
            <div>item3</div>
          </div>}
          placement='bottom'
          trigger='contextMenu'
        >
          <Button style={{ width: 100 }} label="Right Click" />
        </Popover>
      </div>
    )
  }
}
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))
