import React from 'react'
import ReactDom from 'react-dom'
import { Message, Button } from 'Yui'
class Demo extends React.Component {
  render() {
    const message = new Message({
      duration: 3
    })
    return (
      <div className="app-preview">
        <Button label='success' style={{width:100}} onClick={
          () => {
            message.success('success!')
          }
        } />
        <br />
        <Button label='error' style={{width:100}}  onClick={
          () => {
            message.error(`Unable to open 'message': File is a directory.`)
          }
        } />
        <br />
        <Button label='warning' style={{width:100}}  onClick={
          () => {
            message.warning('warning!')
          }
        } />
        <br />
        <Button label='normal' style={{width:100}}  onClick={
          () => {
            message.normal('normal!')
          }
        } />
      </div>
    )
  }
}
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))
