// @ts-nocheck
import React from 'react'
import ReactDom from 'react-dom'
import { Badge } from 'ryui'
class Demo extends React.Component {
  render() {
    return (
      <div className="app-preview">
        <div style={{
          width: 50, 
          height: 50, 
          position: 'relative',
          background: '#222'
        }}>
          <Badge count={4} />
        </div>
      </div>
    )
  }
}
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))