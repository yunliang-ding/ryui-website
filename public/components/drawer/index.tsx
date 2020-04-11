// @ts-nocheck

import React from 'react'
import ReactDom from 'react-dom'
import { Drawer, Button } from 'ryui'
class Demo extends React.Component {
  state = {
    visible: false,
    placement: '',
    height: '100vh',
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
              placement: 'right',
              height: '100vh',
              closable: true,
              footer: null,
              mask: true
            })
          }
        } />
        <br />
         <Button label='Open-NoClose' style={{ width: 100 }} onClick={
          () => {
            this.setState({
              visible: true,
              placement: 'right',
              height: '100vh',
              closable: false,
              footer: null,
              mask: true
            })
          }
        } />
        <br />
        <Button label='Open-NoMask' style={{ width: 100 }} onClick={
          () => {
            this.setState({
              visible: true,
              placement: 'right',
              height: '100vh',
              closable: true,
              footer: null,
              mask: false
            })
          }
        } />
        <br />
        <Button label='Open-Left' style={{ width: 80 }} onClick={
          () => {
            this.setState({
              visible: true,
              placement: 'left',
              height: '100vh',
              footer: null,
              closable: true,
              mask: true
            })
          }
        } />
        <br />
        <Button label='Open-Custom-Height' style={{ width: 140 }} onClick={
          () => {
            this.setState({
              visible: true,
              placement: 'right',
              height: 'calc(100vh - 50px)',
              footer: null,
              closable: true,
              mask: true
            })
          }
        } />
        <br />
        <Button label='Open-No-Footer' style={{ width: 120 }} onClick={
          () => {
            this.setState({
              visible: true,
              placement: 'right',
              height: '100vh',
              footer: false,
              closable: true,
              mask: true
            })
          }
        } />
        <br />
        <Button label='Open-Self-Footer' style={{ width: 120 }} onClick={
          () => {
            this.setState({
              visible: true,
              placement: 'right',
              height: '100vh',
              footer: this.renderFooter(),
              mask: true
            })
          }
        } />
        <Drawer
          title="Basic Drawer"
          placement={this.state.placement}
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
            width: 300,
            height: this.state.height
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
