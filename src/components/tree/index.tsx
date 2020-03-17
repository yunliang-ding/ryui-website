import * as React from "react"
import { Tree } from '../../Yui/index'
import './index.less'
export default class extends React.Component {
  state = {
    info1: '点击显示节点信息',
    info2: '点击显示节点信息',
    data: [{
      key: Math.random(),
      icon: 'icon-jiantou34',
      icon2: 'icon-jiantou32',
      isLeaf: false,
      color: '',
      label: 'Tree',
      isOpen: true,
      node: [{
        key: Math.random(),
        icon: 'icon-logo-javascript',
        color: '#f5f42d',
        label: 'index.js',
        isLeaf: true
      }, {
        key: Math.random(),
        icon: 'icon-json1',
        color: '#1E9FFF',
        label: 'index.less',
        isLeaf: true,
      }, {
        key: Math.random(),
        color: '',
        icon: 'icon-jiantou34',
        icon2: 'icon-jiantou32',
        isLeaf: false,
        label: 'Tree2',
        isOpen: true,
        node: [{
          key: Math.random(),
          icon: 'icon-logo-javascript',
          color: '#f5f42d',
          label: 'index.js',
          isLeaf: true,
        }]
      }]
    }, {
      key: Math.random(),
      icon: 'icon-jiantou34',
      color: '',
      label: 'Button',
      icon2: 'icon-jiantou32',
      isLeaf: false,
      isOpen: true,
      node: [{
        key: Math.random(),
        icon: 'icon-logo-javascript',
        color: '#f5f42d',
        label: 'index.js',
        isLeaf: true,
      }, {
        key: Math.random(),
        icon: 'icon-json1',
        color: '#1E9FFF',
        label: 'index.less',
        isLeaf: true,
      }, {
        key: Math.random(),
        icon: 'icon-logo-javascript',
        color: '#f5f42d',
        label: 'store.js',
        isLeaf: true,
      }]
    }, {
      key: Math.random(),
      icon: 'icon-jiantou34',
      color: '',
      label: 'Select',
      icon2: 'icon-jiantou32',
      isLeaf: false,
      node: [{
        key: Math.random(),
        icon: 'icon-logo-javascript',
        color: '#f5f42d',
        label: 'index.js',
        isLeaf: true,
      }, {
        key: Math.random(),
        icon: 'icon-json1',
        color: '#1E9FFF',
        label: 'index.less',
        isLeaf: true,
      }, {
        key: Math.random(),
        icon: 'icon-logo-javascript',
        color: '#f5f42d',
        label: 'store.js',
        isLeaf: true,
      }]
    }, {
      key: Math.random(),
      icon: 'icon-logo-javascript',
      color: '#f5f42d',
      label: 'app.js',
      icon2: 'icon-jiantou32',
      isLeaf: true,
    }, {
      key: Math.random(),
      icon: 'icon-uniEE',
      color: '#FF5722',
      label: 'react.sql',
      icon2: 'icon-jiantou32',
      isLeaf: true,
    }],
    data2: [
      {
        key: Math.random(),
        icon: 'icon-jiantou34',
        icon2: 'icon-jiantou32',
        isLeaf: false,
        color: '',
        label: 'Tree',
        isOpen: true,
        node: [{
          key: Math.random(),
          icon: 'icon-logo-javascript',
          color: '#f5f42d',
          label: 'index.js',
          isLeaf: true
        }, {
          key: Math.random(),
          icon: 'icon-json1',
          color: '#1E9FFF',
          label: 'index.less',
          isLeaf: true,
        }, {
          key: Math.random(),
          color: '',
          icon: 'icon-jiantou34',
          icon2: 'icon-jiantou32',
          isLeaf: false,
          label: 'Tree2',
          isOpen: true,
          node: [{
            key: Math.random(),
            icon: 'icon-logo-javascript',
            color: '#f5f42d',
            label: 'index.js',
            isLeaf: true,
          }]
        }]
      }, {
        key: Math.random(),
        icon: 'icon-jiantou34',
        color: '',
        label: 'Button',
        icon2: 'icon-jiantou32',
        isLeaf: false,
        isOpen: true,
        node: [{
          key: Math.random(),
          icon: 'icon-logo-javascript',
          color: '#f5f42d',
          label: 'index.js',
          isLeaf: true,
        }, {
          key: Math.random(),
          icon: 'icon-json1',
          color: '#1E9FFF',
          label: 'index.less',
          isLeaf: true,
        }, {
          key: Math.random(),
          icon: 'icon-logo-javascript',
          color: '#f5f42d',
          label: 'store.js',
          isLeaf: true,
        }]
      }, {
        key: Math.random(),
        icon: 'icon-jiantou34',
        color: '',
        label: 'Select',
        icon2: 'icon-jiantou32',
        isLeaf: false,
        node: [{
          key: Math.random(),
          icon: 'icon-logo-javascript',
          color: '#f5f42d',
          label: 'index.js',
          isLeaf: true,
        }, {
          key: Math.random(),
          icon: 'icon-json1',
          color: '#1E9FFF',
          label: 'index.less',
          isLeaf: true,
        }, {
          key: Math.random(),
          icon: 'icon-logo-javascript',
          color: '#f5f42d',
          label: 'store.js',
          isLeaf: true,
        }]
      }, {
        key: Math.random(),
        icon: 'icon-logo-javascript',
        color: '#f5f42d',
        label: 'app.js',
        icon2: 'icon-jiantou32',
        isLeaf: true,
      }, {
        key: Math.random(),
        icon: 'icon-uniEE',
        color: '#FF5722',
        label: 'react.sql',
        icon2: 'icon-jiantou32',
        isLeaf: true,
      }],
    tabs: [{
      key: Math.random(),
      icon: 'icon-logo-javascript',
      color: '#f5f42d',
      label: 'index.js',
      tip: '/user/Tabs/src/index.js',
      active: false
    }, {
      key: Math.random(),
      icon: 'icon-json1',
      color: '#1E9FFF',
      label: 'index.less',
      tip: '/user/Tabs/src/index.js',
      active: true
    }, {
      key: Math.random(),
      icon: 'icon-logo-javascript',
      color: '#f5f42d',
      label: 'webpack.config.prod.js',
      tip: '/user/Tabs/src/index.js',
      active: false
    }, {
      key: Math.random(),
      icon: 'icon-logo-javascript',
      color: '#f5f42d',
      label: 'index.js',
      tip: '/user/Tabs/src/index.js',
      active: false
    }, {
      key: Math.random(),
      icon: 'icon-json1',
      color: '#1E9FFF',
      label: 'index.less',
      tip: '/user/Tabs/src/index.js',
      active: false
    }, {
      key: Math.random(),
      icon: 'icon-logo-javascript',
      color: '#f5f42d',
      label: 'webpack.config.prod.js',
      tip: '/user/Tabs/src/index.js',
      active: false
    }]
  }
  render() {
    return (
      <div className="app-tree">
        <Tree
          style={{width: 200}}
          type="simple"
          treeData={this.state.data}
          onClick={
            (e) => {
              console.log(e)
            }
          }
          onChange={
            (e) => {
              console.log(e)
            }
          }
        />
        <Tree
          style={{width: 200}}
          treeData={this.state.data2}
          onClick={
            (e) => {
              console.log(e)
            }
          }
          onChange={
            (e) => {
              console.log(e)
            }
          }
        />
      </div>
    )
  }
}
