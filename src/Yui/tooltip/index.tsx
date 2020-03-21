import * as React from 'react'
import './index.less'
const $: any = document.querySelector.bind(document)
class Tooltip extends React.Component {
  props: any
  state: any
  node: any
  innerNode: any
  allowsNode: any
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    let placement = this.props.placement || 'right' // 默认显示在右侧
    let parentHeight = parseFloat(window.getComputedStyle(this.node).height)
    let parentWidth = parseFloat(window.getComputedStyle(this.node).width)
    let innerHeight = parseFloat(window.getComputedStyle(this.innerNode).height)
    let innerWidth = parseFloat(window.getComputedStyle(this.innerNode).width)
    if (placement === 'right') {
      this.innerNode.style.left = parentWidth + 10
      this.innerNode.style.top = (parentHeight - innerHeight) / 2
      this.allowsNode.style.left = -2
    } else if (placement === 'left') {
      this.innerNode.style.right = parentWidth + 10
      this.innerNode.style.top = (parentHeight - innerHeight) / 2
      this.allowsNode.style.right = -2
    } else if (placement === 'top') {
      this.innerNode.style.left = - Math.abs(parentWidth - innerWidth) / 2
      this.innerNode.style.top = - (parentHeight + 8)
      this.allowsNode.style.bottom = -2
    } else if (placement === 'bottom') {
      this.innerNode.style.left = - Math.abs(parentWidth - innerWidth) / 2
      this.innerNode.style.top = parentHeight + 8
      this.allowsNode.style.top = -2
    }
  }
  render() {
    return <div className='yui-tooltips' ref={(node) => { this.node = node }}>
      {this.props.children}
      <div className='yui-tooltips-inner' ref={(innerNode) => { this.innerNode = innerNode }}>
        <div className='yui-tooltips-inner-content'>
          {this.props.title}
        </div>
        <div className='yui-tooltips-inner-layer'></div>
        <div className='yui-tooltips-inner-allows' ref={(allowsNode) => { this.allowsNode = allowsNode }}></div>
      </div>
    </div>
  }
}
export {
  Tooltip
}
