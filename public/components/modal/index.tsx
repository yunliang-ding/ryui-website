import React from 'react'
import ReactDom from 'react-dom'
import { Modal, Button } from 'ryui'
class Demo extends React.Component {
  state = {
    visible: false,
    footer: false,
    mask: true,
    closable: true
  }
  renderFooter = () => {
    return [
      <Button
        type='warn'
        label='self-ok'
        style={{ width: 80 }}
      />,
      <Button
        type='danger'
        label='self-cancel'
        style={{ width: 80 }}
      />
    ]
  }
  render() {
    return (
      <div className="app-preview">
        <Button label='Open' style={{ width: 80 }} onClick={
          () => {
            this.setState({
              visible: true,
              footer: null,
              closable: true,
              mask: true
            })
          }
        } />
        <br />
        <Button label='Open-NoClose' style={{ width: 100 }} onClick={
          () => {
            this.setState({
              visible: true,
              footer: null,
              closable: false,
              mask: true
            })
          }
        } />
        <br />
        <Button label='Open-NoMask' style={{ width: 100 }} onClick={
          () => {
            this.setState({
              visible: true,
              closable: true,
              footer: null,
              mask: false
            })
          }
        } />
        <br />
        <Button label='Open-No-Footer' style={{ width: 120 }} onClick={
          () => {
            this.setState({
              visible: true,
              closable: true,
              footer: false,
              mask: true
            })
          }
        } />
        <br />
        <Button label='Open-Self-Footer' style={{ width: 120 }} onClick={
          () => {
            this.setState({
              visible: true,
              closable: true,
              footer: this.renderFooter(),
              mask: true
            })
          }
        } />
        <Modal
          title="Basic Modal"
          closable={this.state.closable}
          mask={this.state.mask}
          footer={this.state.footer}
          visible={this.state.visible}
          content={
            [
              <p>Some contents...</p>,
              <p>Some contents...</p>,
              <p>Some contents...</p>
            ]
          }
          style={{
            width: 600,
            height: 400
          }}
          onClose={
            () => {
              console.log('close')
            }
          }
          onOk={
            () => {
              console.log('ok')
            }
          }
        />
      </div>
    )
  }
}
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))
