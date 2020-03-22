import * as React from 'react'
import * as ReactDOM from "react-dom"
const $: any = document.querySelector.bind(document)
import './index.less'
class Message {
  duration: any
  dark: any
  constructor(props) {
    this.duration = props.duration
    this.dark = props.dark
  }
  open = (type, content) => {
    let messageContainer = document.createElement("div");
    messageContainer.className = 'yui-message-container'
    $('body').appendChild(messageContainer)
    ReactDOM.render(this.renderMessage(type, content), document.querySelector('.yui-message-container'))
  }
  colse = () => {
    $('.yui-message-container').remove()
  }
  success = (content) => {
    this.open(1, content)
  }
  error = (content) => {
    this.open(2, content)
  }
  warning = (content) => {
    this.open(3, content)
  }
  normal = (content) => {
    this.open(4, content)
  }
  renderMessage = (type, content) => {
    return <div className='yui-message-context'>
      {content}
    </div>
  }
}
export {
  Message
}