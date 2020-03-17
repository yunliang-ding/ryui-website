import * as React from "react"
import { Tab } from '../../Yui/index'
import './index.less'
import { observer, inject } from 'mobx-react'
@inject('UI')
@observer
export default class extends React.Component {
  state = {
    info: null,
    data: [{
      key: 1,
      icon: 'icon-react',
      color: '#1296db',
      label: 'index1.jsx',
      tip: '/user/Tabs/src/index.js',
      active: false
    }, {
      key: 2,
      icon: 'icon-react',
      color: '#1296db',
      label: 'index1.jsx',
      tip: '/user/Tabs/src/index.js',
      active: false
    }, {
      key: 3,
      icon: 'icon-react',
      color: '#1296db',
      label: 'index1.jsx',
      tip: '/user/Tabs/src/index.js',
      active: false
    }, {
      key: 4,
      icon: 'icon-react',
      color: '#1296db',
      label: 'index1.jsx',
      tip: '/user/Tabs/src/index.js',
      active: false
    }],
    value: 3
  }
  props: any
  render() {
    const { dark } = this.props.UI
    return (
      <div className="app-tab">
        <Tab
          dark={dark}
          style={{ width: 800 }}
          data={this.state.data}
          value={this.state.value}
          onClick={
            (e) => {
              this.setState({
                value: e.key
              })
            }
          }
        />
        <br />
        <Tab
          dark={dark}
          close
          style={{ width: 800 }}
          data={this.state.data}
          value={this.state.value}
          onRemove={
            (data) => {
              this.setState({
                data: data,
                value: data[0] && data[0].key
              })
            }
          }
          onClick={
            (e) => {
              this.setState({
                value: e.key
              })
            }
          }
        />
      </div>
    )
  }
}
