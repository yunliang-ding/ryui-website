import React from 'react'
import ReactDom from 'react-dom'
import { Alert, Button } from 'ryui'
class Demo extends React.Component {
  state = {
    show1: false,
    show2: false
  }
  setClose = (key, value) => {
    this.setState({
      [key]: value
    })
  }
  render() {
    return (
      <div className="app-preview">
        <Button style={{ width: 100 }} label="基本提示框" onClick={
          () => {
            this.setClose('show1', true)
          }
        } />
        <br />
        <Button style={{ width: 100 }} label="基本询问框" onClick={
          () => {
            this.setClose('show2', true)
          }
        } />
        <Alert
          show={this.state.show1}
          title={'我是提示框'}
          okText={'我知道了'}
          onOk={
            () => {
              this.setClose('show1', false)
              alert('我知道了')
            }
          }
          onClose={
            () => {
              this.setClose('show1', false)
            }
          }
        >
          这个是一个提示信息
        </Alert>
        <Alert
          show={this.state.show2}
          title={'我是询问框'}
          cancelText={'取消'}
          okText={'确定'}
          onCancel={
            () => {
              this.setClose('show2', false)
              alert('取消');
            }
          }
          onOk={
            () => {
              this.setClose('show2', false)
              alert('确定');
            }
          }
          onClose={
            () => {
              this.setClose('show2', false)
            }
          }
        >
          你要删除这个信息吗？
        </Alert>
      </div>
    )
  }
}
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))