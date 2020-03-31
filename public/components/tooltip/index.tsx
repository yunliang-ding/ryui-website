import React from 'react'
import ReactDom from 'react-dom'
import { Tooltip, Button } from 'Yui'
class Demo extends React.Component {
  render() {
    return (
      <div className="app-preview">
        <Tooltip
          title={<span>音乐不是我的全部</span>}
          placement='right'
        >
          <Button style={{ width: 100 }} label="Right" />
        </Tooltip>
        <br />
        <Tooltip
          title={<span>音乐不是我的全部</span>}
          placement='left'
        >
          <Button style={{ width: 100 }} label="Left" />
        </Tooltip>
        <br />
        <br />
        <br />
        <Tooltip
          title={<span>音乐不是我的全部</span>}
          placement='top'
        >
          <Button style={{ width: 145, height: 120 }} label="Top" />
        </Tooltip>
        <br />
        <Tooltip
          title={<span>音乐不是我的全部</span>}
          placement='bottom'
        >
          <Button style={{ width: 100 }} label="Bottom" />
        </Tooltip>
      </div>
    )
  }
}
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))
