import * as React from "react"
import './index.less'
class Input extends React.Component {
  props: any;
  render() {
    let addonBefore = null
    let addonAfter = null
    let type = this.props.type || 'text'
    let input = null;
    if (this.props.addonBefore) { // 前置按钮
      addonBefore = <span className="yui-input-addonBefore">
        {this.props.addonBefore}
      </span>
    }
    if (this.props.addonAfter) { // 后置按钮
      addonAfter = <span className="yui-input-addonAfter">
        {this.props.addonAfter}
      </span>
    }
    if (type == 'text') {
      input = <input className="input"
        type="text"
        style={this.props.style}
        value={this.props.value}
        placeholder={this.props.placeholder}
        onChange={
          (e) => {
            this.props.onChange(e)
          }
        }
      />
      if (this.props.readonly == true) {
        input = <input className="input-disabled" readOnly
          type="text"
          style={this.props.style}
          value={this.props.value}
          placeholder={this.props.placeholder}
        />
      }
    } else if (type == 'textArea') {
      input = <textarea className="yui-input-textArea">{this.props.value}</textarea>
    }

    return (
      <div className="yui-input">
        {addonBefore}
        {input}
        {addonAfter}
      </div>
    )
  }
}
export {
  Input
}