import * as React from 'react'
import './index.less'
const Window:any = window
/**
  props:{
    type: string | default text
    addonBefore: ReactNode
    addonAfter: ReactNode
  }
 */
class Input extends React.Component {
  props: any;
  render() {
    let addonBefore = null
    let addonAfter = null
    let type = this.props.type || 'text'
    let input = null;
    let theme = this.props.dark || Window.yuiIsDark ? '-dark' : ''
    if (this.props.addonBefore) { // 前置按钮
      addonBefore = <span className={'yui-input-addonBefore' + theme}>
        {this.props.addonBefore}
      </span>
    }
    if (this.props.addonAfter) { // 后置按钮
      addonAfter = <span className={'yui-input-addonAfter' + theme}>
        {this.props.addonAfter}
      </span>
    }
    if (type === 'textArea') {
      input = <textarea 
        readOnly={this.props.readonly}
        className={'yui-input-textArea' + theme}
        value={this.props.value}
        onChange={
          (e) => {
            this.props.onChange(e)
          }
        }
        style={this.props.style}
      >
        {this.props.value}
      </textarea>
    } else {
      input = <input className={'input' + theme}
        type={this.props.type}
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
        input = <input className={'input-disabled' + theme} readOnly
          type='text'
          style={this.props.style}
          value={this.props.value}
          placeholder={this.props.placeholder}
        />
      }
    }
    return (
      <div className='yui-input'>
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