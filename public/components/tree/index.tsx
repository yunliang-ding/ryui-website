import React from 'react'
import ReactDom from 'react-dom'
import { Tree } from 'Yui'
class Demo extends React.Component {
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
        icon: 'icon-react',
        color: '#1296db',
        label: 'index.jsx',
        isLeaf: true
      }, {
        key: Math.random(),
        icon: 'icon-less',
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
          icon: 'icon-react',
          color: '#1296db',
          label: 'index.jsx',
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
        icon: 'icon-react',
        color: '#1296db',
        label: 'index.jsx',
        isLeaf: true,
      }, {
        key: Math.random(),
        icon: 'icon-less',
        color: '#1E9FFF',
        label: 'index.less',
        isLeaf: true,
      }, {
        key: Math.random(),
        icon: 'icon-react',
        color: '#1296db',
        label: 'store.jsx',
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
        icon: 'icon-react',
        color: '#1296db',
        label: 'index.jsx',
        isLeaf: true,
      }, {
        key: Math.random(),
        icon: 'icon-less',
        color: '#1E9FFF',
        label: 'index.less',
        isLeaf: true,
      }, {
        key: Math.random(),
        icon: 'icon-react',
        color: '#1296db',
        label: 'store.jsx',
        isLeaf: true,
      }]
    }, {
      key: Math.random(),
      icon: 'icon-react',
      color: '#1296db',
      label: 'app.jsx',
      icon2: 'icon-jiantou32',
      isLeaf: true,
    }, {
      key: Math.random(),
      icon: 'icon-react',
      color: '#FF5722',
      label: 'react.jsx',
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
          icon: 'icon-react',
          color: '#1296db',
          label: 'index.jsx',
          isLeaf: true
        }, {
          key: Math.random(),
          icon: 'icon-less',
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
            icon: 'icon-react',
            color: '#1296db',
            label: 'index.jsx',
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
          icon: 'icon-react',
          color: '#1296db',
          label: 'index.jsx',
          isLeaf: true,
        }, {
          key: Math.random(),
          icon: 'icon-less',
          color: '#1E9FFF',
          label: 'index.less',
          isLeaf: true,
        }, {
          key: Math.random(),
          icon: 'icon-react',
          color: '#1296db',
          label: 'store.jsx',
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
          icon: 'icon-react',
          color: '#1296db',
          label: 'index.jsx',
          isLeaf: true,
        }, {
          key: Math.random(),
          icon: 'icon-less',
          color: '#1E9FFF',
          label: 'index.less',
          isLeaf: true,
        }, {
          key: Math.random(),
          icon: 'icon-react',
          color: '#1296db',
          label: 'store.jsx',
          isLeaf: true,
        }]
      }, {
        key: Math.random(),
        icon: 'icon-react',
        color: '#1296db',
        label: 'app.jsx',
        icon2: 'icon-jiantou32',
        isLeaf: true,
      }, {
        key: Math.random(),
        icon: 'icon-react',
        color: '#FF5722',
        label: 'react.jsx',
        icon2: 'icon-jiantou32',
        isLeaf: true,
      }],
    tabs: [{
      key: Math.random(),
      icon: 'icon-react',
      color: '#1296db',
      label: 'index.jsx',
      tip: '/user/Tabs/src/index.jsx',
      active: false
    }, {
      key: Math.random(),
      icon: 'icon-less',
      color: '#1E9FFF',
      label: 'index.less',
      tip: '/user/Tabs/src/index.jsx',
      active: true
    }, {
      key: Math.random(),
      icon: 'icon-react',
      color: '#1296db',
      label: 'webpack.config.prod.jsx',
      tip: '/user/Tabs/src/index.jsx',
      active: false
    }, {
      key: Math.random(),
      icon: 'icon-react',
      color: '#1296db',
      label: 'index.jsx',
      tip: '/user/Tabs/src/index.jsx',
      active: false
    }, {
      key: Math.random(),
      icon: 'icon-less',
      color: '#1E9FFF',
      label: 'index.less',
      tip: '/user/Tabs/src/index.jsx',
      active: false
    }, {
      key: Math.random(),
      icon: 'icon-react',
      color: '#1296db',
      label: 'webpack.config.prod.jsx',
      tip: '/user/Tabs/src/index.jsx',
      active: false
    }]
  }
  render() {
    const dark = true
    return (
      <div className="app-preview" style={{flexDirection: 'row'}}>
        <Tree
          style={{
            width: 200,
            height: 500,
            background: dark ? '#333' : '#dcdcdc'
          }}
          dark={dark}
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
          style={{
            width: 200,
            height: 500,
            marginLeft: 50,
            background: dark ? '#333' : '#dcdcdc'
          }}
          dark={dark}
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
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))
