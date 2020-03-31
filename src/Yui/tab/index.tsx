import * as React from 'react'
import './index.less'
const Window:any = window
class Tab extends React.Component {
  props: any
  render() {
    let tabs = null;
    let { close, data, value, onClick, onRemove } = this.props
    tabs = <div className="yui-tabs-compont">
      {
        data && data.map(tab => {
          return (
            <div title={tab.tip} key={tab.key} className={value === tab.key ? "yui-tabs-item-active" : "yui-tabs-item"} onClick={
              () => {
                onClick(tab)
              }
            }>
              <i className={"iconfont " + tab.icon} style={{ color: tab.color }} />
              <span style={{ margin: '0 8px' }}>{tab.label}</span>
              {
                close ? <i
                  className="iconfont icon-guanbi"
                  style={{
                    visibility: value === tab.key ? 'visible' : 'hidden'
                  }}
                  onClick={
                    (e) => {
                      e.stopPropagation(); //阻止往上冒泡
                      let filterData = data.filter(m=>{
                          return m.key != tab.key
                      })
                      onRemove(filterData)
                    }
                  }
                /> : <i className="iconfont" style={{
                  visibility: 'hidden'
                }} />
              }
            </div>
          )
        })
      }
    </div>
    let theme = this.props.dark || Window.yuiIsDark ? '-dark' : ''
    return <div className={"yui-tabs" + theme} style={this.props.style}>
      {tabs}
    </div>
  }
}
export {
  Tab
}
