import React from 'react'
import ReactDom from 'react-dom'
import { Tab } from 'Yui'
class Demo extends React.Component {
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
    }],
    value: 3
  }
  render() {
    return (
      <div className="app-preview">
        <Tab
          style={{ width: 500 }}
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
          style={{ width: 500 }}
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
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))
