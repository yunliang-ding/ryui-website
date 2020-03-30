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
          content={<div>
            <Button dark={dark} style={{ width: 100 }} label="姓名" /><br />
            <Button dark={dark} style={{ width: 100 }} label="爱好" /><br />
            <Button dark={dark} style={{ width: 100 }} label="职业" /><br />
          </div>}
          placement='bottom'
        >
          <Button dark={dark} style={{ width: 100 }} label="Click" />
        </Popover>
      </div>
    )
  }
}
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))
