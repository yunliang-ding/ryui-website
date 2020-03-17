import * as React from "react"
import { Button } from '../index'
import './index.less'
class Alert extends React.Component {
  props: any;
  state = {
    show: true
  }
  close = () => {
    if (this.props.onClose) {
      this.props.onClose();
    }
    this.setState({
      show: false
    })
  }
  componentWillReceiveProps(newProps) {
    this.setState({
      show: newProps.show
    })
  }
  componentWillMount() {
    if (this.props.show != undefined) {
      this.setState({
        show: this.props.show
      })
    }
  }
  render() {
    let show = this.state.show;
    let theme = this.props.dark ? '-dark' : ''
    return (
      <div className={"yui-alert"+theme} style={{ display: show ? 'block' : 'none' }}>
        <div className="yui-alert-center">
          <div className="yui-alert-title">
            <span>{this.props.title}</span>
            <span><i className="iconfont icon-guanbi" onClick={this.close} /> </span>
          </div>
          <div className="yui-alert-body">
            {this.props.children}
          </div>
          <div className="yui-alert-footer">
            <Button dark={this.props.dark} type={this.props.dark ? "normal" : 'primary'} style={{ width: 80 }} label={this.props.okText || '确定'} onClick={
              () => {
                if (this.props.onOk) {
                  this.props.onOk()
                } 
                this.setState({
                  show: false
                })
              }
            } />
            {
              this.props.cancelText && <Button dark={this.props.dark} style={{ width: 80 }} label={this.props.cancelText} onClick={
                () => {
                  if (this.props.onCancel) {
                    this.props.onCancel()
                  }
                  this.setState({
                    show: false
                  })
                }
              } />
            }
          </div>
        </div>
      </div>
    )
  }
}
export {
  Alert
}
