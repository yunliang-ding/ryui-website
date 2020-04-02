import * as React from 'react'
import './index.less'
import { Button } from '../index'
const Window: any = window
class Drawer extends React.Component {
  props: {
    title?:any,
    closable?:boolean,
    placement?:string,
    visible:boolean,
    style?:any,
    onClose?:any,
    dark?:boolean,
    chilrden?:any
  }
  render() {
    const { placement, visible } = this.props
    const theme = this.props.dark || Window.yuiIsDark ? '-dark' : ''
    let style = this.props.style || {}
    if(placement === 'left'){
      style.left = 0
      style.right = 'auto'
    } else {
      style.right = 0
      style.left = 'auto'
    }
    return visible === true && <div className={'yui-drawer'+theme} style={style}>
      <div className='yui-drawer-header'>
        <div>
          {this.props.title}
        </div>
        <i className='iconfont icon-guanbi'></i>
      </div>
      <div className='yui-drawer-body'>
        {this.props.chilrden}
      </div>
      <div className='yui-drawer-footer'>
        <Button label='确定' style={{width: 80}} />
        <Button label='取消' style={{width: 80}} />
      </div>
    </div>
  }
}
export {
  Drawer
}