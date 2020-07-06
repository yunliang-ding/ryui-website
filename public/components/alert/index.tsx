// @ts-nocheck
import React from 'react'
import ReactDom from 'react-dom'
import { Alert } from 'react-ryui'
class Demo extends React.Component {
  render() {
    return (
      <div className="app-preview">
        <Alert message='我是提示框' type='success' />
        <br />
        <Alert message='我是提示框' type='info' />
        <br />
        <Alert
          message='我是提示框'
          type='warning'
          closable
          onClose={
            () => {
              console.log('close')
            }
          }
        />
        <br />
        <Alert
          message='我是提示框'
          type='error'
          closable
          onClose={
            () => {
              console.log('close')
            }
          }
        />
      </div>
    )
  }
}
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))