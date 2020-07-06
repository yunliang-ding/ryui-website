// @ts-nocheck
import React from 'react'
import ReactDom from 'react-dom'
import { Tree } from 'react-ryui'
class Demo extends React.Component {
  state = {
    data: [{
      key: '1',
      label: 'parent-1',
      children: [{
        key: '1-1',
        disabled: true,
        label: 'childern-1-1'
      }, {
        key: '1-2',
        label: 'childern-1-2'
      }, {
        key: '1-3',
        label: 'childern-1-3',
        children: [{
          key: '1-3-1',
          label: 'childern-1-3-1'
        }]
      }]
    }, {
      key: '2',
      label: 'parent-2',
      children: [{
        key: '2-1',
        label: 'childern-2-1'
      }, {
        key: '2-2',
        label: 'childern-2-2'
      }, {
        key: '2-3',
        label: 'childern-2-3',
        children: [{
          key: '2-3-1',
          label: 'childern-2-3-1',
          
        }]
      }]
    }, {
      key: '3',
      label: 'parent-3',
      icon: 'icon-react'
    }]
  }
  render() {
    return (
      <div className="app-preview">
        <div style={{display: 'flex'}}>
          <Tree
            style={{
              width: 200,
              height: 200
            }}
            checkable
            defaultExpandedKeys={['1', '1-3']}
            defaultCheckedKeys={['1-2']}
            treeData={this.state.data}
            onCheck={
              (e) => {
                console.log(e)
              }
            }
            onExpand={
              (e) => {
                console.log(e)
              }
            }
          />
          <Tree
            style={{
              width: 200,
              height: 200
            }}
            defaultExpandedKeys={['1', '1-3']}
            defaultCheckedKeys={['1-2']}
            treeData={this.state.data}
            onCheck={
              (e) => {
                console.log(e)
              }
            }
            onExpand={
              (e) => {
                console.log(e)
              }
            }
          />
        </div>
      </div>
    )
  }
}
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))