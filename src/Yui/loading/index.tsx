import * as React from 'react'
import './index.less'
class Loading extends React.Component {
  state = {
    loading: false
  }
  props: any;
  componentWillReceiveProps(newProps) {
    this.setState({
      loading: newProps.loading
    })
  }
  componentWillMount() {
    this.setState({
      loading: this.props.loading || this.state.loading
    })
  }
  render() {
    let loading = this.state.loading;
    let { background, iconColor, icon } = this.props.options || {
      background: null,
      iconColor: null,
      icon: null
    }
    background = background || '#f2f2f2'
    iconColor = iconColor || 'var(--theme-color)'
    icon = icon || 'icon-loading6'
    const theme = this.props.dark ? '-dark' : ''
    return (
      <div className={"yui-loading"+theme} style={this.props.style}>
        <div className="yui-loading-body">
          {this.props.children}
        </div>
        <div className="yui-loading-opacity" style={{ display: loading ? "block" : "none", background }}>
          <div className="message">
            <i style={{ color: iconColor }} className={'iconfont ' + icon}></i>
          </div>
        </div>
      </div>
    )
  }
}
export {
  Loading
}