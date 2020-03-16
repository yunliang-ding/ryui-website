import * as React from "react"
import './index.less'
class Button extends React.Component {
  props: any;
  render() {
    let { label, type, style } = this.props
    type = type || 'normal'
    let button = null
    let theme = this.props.dark ? '-dark' : ''
    if (type == 'primary') {
      button = <div className="yui-button yui-button-primary" style={style} onClick={
        () => {
          this.props.onClick()
        }
      }>
        {label}
      </div>
    } else if (type == 'warm') {
      button = <div className="yui-button yui-button-warm" style={style} onClick={
        () => {
          this.props.onClick()
        }
      }>
        {label}
      </div>
    } else if (type == 'normal') {
      button = <div className={"yui-button yui-button-normal"+theme} style={style} onClick={
        () => {
          this.props.onClick()
        }
      }>
        {label}
      </div>
    } else if (type == 'danger') {
      button = <div className="yui-button yui-button-danger" style={style} onClick={
        () => {
          this.props.onClick()
        }
      }>
        {label}
      </div>
    } else if (type == 'disabled') {
      button = <div className={"yui-button yui-button-disabled"+theme} style={style} onClick={
        () => {
          this.props.onClick()
        }
      }>
        {label}
      </div>
    } else if (type == 'blue') {
      button = <div className="yui-button yui-button-blue" style={style} onClick={
        () => {
          this.props.onClick()
        }
      }>
        {label}
      </div>
    }
    return button
  }
}
export {
  Button
}