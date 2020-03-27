import * as React from "react"
import './index.less'
class Cascader extends React.Component {
  props: any;
  state = {
    isOpen: false
  }
  render() {
    const { style, dark } = this.props
    let theme = dark ? '-dark' : ''
    const { isOpen } = this.state
    let cascader = <div
      style={style}
      className={'yui-cascader' + theme}
      onClick={
        () => {
          this.setState({
            isOpen: !isOpen
          })
        }
      }
    >
      <div className='yui-cascader-allow'>
        <i className={isOpen ? 'iconfont icon-jiantou' : 'iconfont icon-jiantou32'}></i>
      </div>
      {
        this.state.isOpen && [
          <div className='yui-cascader-body-spin' />,
          <div className='yui-cascader-body-allow' />,
          <div className='yui-cascader-body' onClick={
            (e) => {
              e.stopPropagation()
            }
          }>
            <div className='yui-cascader-body-content'>
              <div className='yui-cascader-body-content-item'>
                <span>zhejiang</span>
                <i className='iconfont icon-jiantou1'></i>
              </div>
              <div className='yui-cascader-body-content-item'>
                <span>anhui</span>
                <i className='iconfont icon-jiantou1'></i>
              </div>
            </div>
            <div className='yui-cascader-body-content'>
              {
                <div className='yui-cascader-body-content-item'>
                  <span>hangzhou</span>
                  <i className='iconfont icon-jiantou1'></i>
                </div>
              }
            </div>
            <div className='yui-cascader-body-content'>
              {
                <div className='yui-cascader-body-content-item'>
                  <span>xihuqu</span>
                </div>
              }
            </div>
          </div>
        ]
      }
    </div>
    return cascader
  }
}
export {
  Cascader
}