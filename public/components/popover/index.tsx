import React from 'react'
import ReactDom from 'react-dom'
import { Popover, Button } from 'ryui'
class Demo extends React.Component {
  content = () => {
    return <div style={{ width: 100, padding: 8 }}>
      <div>item1</div>
      <div>item2</div>
      <div>item3</div>
    </div>
  }
  render() {
    return (
      <div className="app-preview">
        <Popover
          content={this.content()}
          trigger='hover'
          placement='right'
        >
          <Button style={{ width: 100 }} label="Hover" />
        </Popover>
        <br /><br />
        <Popover
          content={this.content()}
          placement='bottom'
        >
          <Button style={{ width: 100 }} label="Click" />
        </Popover>
        <br /><br />
        <Popover
          content={this.content()}
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