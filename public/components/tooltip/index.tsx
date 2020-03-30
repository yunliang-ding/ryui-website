import React from 'react'
import ReactDom from 'react-dom'
import { Tooltip, Button } from 'Yui'
class Demo extends React.Component {
  render() {
    const dark = true
    return (
      <div className="app-preview">
        <Tooltip
          dark={dark}
          title={<span>音乐不是我的全部</span>}
          placement='right'
        >
          <Button dark={dark} style={{ width: 100 }} label="Right" />
        </Tooltip>
        <br />
        <Tooltip
          dark={dark}
          title={<span>音乐不是我的全部</span>}
          placement='left'
        >
          <Button dark={dark} style={{ width: 100 }} label="Left" />
        </Tooltip>
        <br />
        <br />
        <br />
        <Tooltip
          dark={dark}
          title={<span>音乐不是我的全部</span>}
          placement='top'
        >
          <Button dark={dark} style={{ width: 145, height: 120 }} label="Top" />
        </Tooltip>
        <br />
        <Tooltip
          dark={dark}
          title={<span>音乐不是我的全部</span>}
          placement='bottom'
        >
          <Button dark={dark} style={{ width: 100 }} label="Bottom" />
        </Tooltip>
      </div>
    )
  }
}
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))
