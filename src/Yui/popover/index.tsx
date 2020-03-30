import * as React from 'react'
import './index.less'
class Popover extends React.Component {
  props: any
  state: any
  node: any
  innerNode: any
  allowNode: any
  constructor(props) {
    super(props)
    this.state = {
      visable: false
    }
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
      this.allowNode.style.left = -2
    } else if (placement === 'left') {
      this.innerNode.style.right = parentWidth + 10
      this.innerNode.style.top = (parentHeight - innerHeight) / 2
      this.allowNode.style.right = -2
    } else if (placement === 'top') {
      this.innerNode.style.left = (parentWidth - innerWidth) / 2
      this.innerNode.style.top = - (innerHeight + 10)
      this.allowNode.style.bottom = -2
    } else if (placement === 'bottom') {
      this.innerNode.style.left = (parentWidth - innerWidth) / 2
      this.innerNode.style.top = parentHeight + 10
      this.allowNode.style.top = -2
    }
  }
  render() {
    const { visable } = this.state
    console.log('visable', visable)
    let theme = this.props.dark ? '-dark' : ''
    return <div
      className={'yui-popover' + theme}
      ref={(node) => { this.node = node }}
      onClick={
        () => {
          this.setState({
            visable: !visable
          }, () => {
            if(this.props.onChange){
              this.props.onChange()
            }
          })
        }
      }
    >
      {this.props.children}
      {visable && <div className='yui-popover-layer' />}
      <div
        className='yui-popover-inner'
        ref={(innerNode) => { this.innerNode = innerNode }}
        style={{
          visibility: visable ? 'visible' : 'hidden'
        }}
      >
        <div className='yui-popover-inner-layer' />
        <div className='yui-popover-inner-allow' ref={(allowNode) => { this.allowNode = allowNode }} />
        <div className='yui-popover-inner-content'>
          {this.props.content}
        </div>
      </div>
    </div>
  }
}
export {
  Popover
}
