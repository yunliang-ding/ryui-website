import * as React from "react"
import { Tab } from '../../Yui/index'
import './index.less'
export default class extends React.Component {
  state = {
    info: null,
    data: [{
      key: 1,
      icon: 'icon-react',
      color: 'var(--theme-color)',
      label: '面板1',
      tip: '/user/Tabs/src/index.js',
      active: false
    }, {
      key: 2,
      icon: 'icon-react',
      color: 'var(--theme-color)',
      label: '面板2',
      tip: '/user/Tabs/src/index.js',
      active: false
    }, {
      key: 3,
      icon: 'icon-react',
      color: 'var(--theme-color)',
      label: '面板3',
      tip: '/user/Tabs/src/index.js',
      active: false
    }, {
      key: 4,
      icon: 'icon-react',
      color: 'var(--theme-color)',
      label: '面板4',
      tip: '/user/Tabs/src/index.js',
      active: false
    }],
    value: 3
  }
  render() {
    return (
      <div className="app-tab">
        <Tab
          style={{width: 800}}
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
          close
          style={{width: 800}}
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
