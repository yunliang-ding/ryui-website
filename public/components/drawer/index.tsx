import React from 'react'
import ReactDom from 'react-dom'
import { Drawer, Button } from 'ryui'
class Demo extends React.Component {
  state = {
    visible: false,
    placement: '',
    height: '100vh'
  }
  render() {
    return (
      <div className="app-preview">
        <Button label='Open-Left' style={{ width: 80 }} onClick={
          () => {
            this.setState({
              visible: true,
              placement: 'left',
              height: '100vh'
            })
          }
        } />
        <br />
        <Button label='Open-Right' style={{ width: 80 }} onClick={
          () => {
            this.setState({
              visible: true,
              placement: 'right',
              height: '100vh'
            })
          }
        } />
        <br />
        <Button label='Open-Self-Height' style={{ width: 120 }} onClick={
          () => {
            this.setState({
              visible: true,
              placement: 'right',
              height: 'calc(100vh - 50px)'
            })
          }
        } />
        <br />
        <Button label='Open-Self-Footer' style={{ width: 120 }} onClick={
          () => {
            this.setState({
              visible: true,
              placement: 'right',
              height: '100vh'
            })
          }
        } />
        <Drawer
          title="Basic Drawer"
          placement={this.state.placement}
          closable
          visible={this.state.visible}
          style={{
            width: 300,
            height: this.state.height
          }}
          onClose={
            (e) => {
              console.log(e)
            }
          }
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>

      </div>
    )
  }
}
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))
