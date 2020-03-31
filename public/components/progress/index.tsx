import React from 'react'
import ReactDom from 'react-dom'
import { Progress } from 'Yui'
class Demo extends React.Component {
  render() {
    return (
      <div className="app-preview">
        <Progress value={56} />
      </div>
    )
  }
}
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))
