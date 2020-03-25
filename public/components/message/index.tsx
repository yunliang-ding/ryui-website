const React = require('react')
const ReactDom = require('react-dom')
const { Message, Button } = require('Yui')
class Demo extends React.Component {
  render() {
    const dark = true
    const message = new Message({
      duration: 3,
      dark
    })
    return (
      <div className="app-preview">
        <Button dark={dark} label='success' style={{width:100}} onClick={
          () => {
            message.success('success!')
          }
        } />
        <br />
        <Button dark={dark} label='error' style={{width:100}}  onClick={
          () => {
            message.error(`Unable to open 'message': File is a directory.`)
          }
        } />
        <br />
        <Button dark={dark} label='warning' style={{width:100}}  onClick={
          () => {
            message.warning('warning!')
          }
        } />
        <br />
        <Button dark={dark} label='normal' style={{width:100}}  onClick={
          () => {
            message.normal('normal!')
          }
        } />
      </div>
    )
  }
}
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))
