import React from 'react'
import ReactDom from 'react-dom'
import { Popover, Button, Tree } from 'ryui'
class Demo extends React.Component {
  data = [{
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
        label: 'childern-2-3-1'
      }]
    }]
  }]
  renderTree = () => {
    return <Tree
        style={{
          width: 150,
          height: 200,
          overflow: 'auto'
        }}
        defaultExpandedKeys={['1', '1-3']}
        defaultCheckedKeys={['1-2']}
        treeData={this.data}
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
  }
  content = () => {
    return <div style={{ width: 100, padding: 8 }}>
      <div>item1</div>
      <div>item2</div>
      <div>item3</div>
    </div>
  }
  render() {
    return (
      <div className="app-preview">
        <Popover
          content={this.content()}
          trigger='hover'
          placement='right'
        >
          <Button style={{ width: 100 }} label="Hover" />
        </Popover>
        <br /><br />
        <Popover
          content={this.content()}
          placement='bottom'
        >
          <Button style={{ width: 100 }} label="Click" />
        </Popover>
        <br /><br />
        <Popover
          content={this.content()}
          placement='bottom'
          trigger='contextMenu'
        >
          <Button style={{ width: 100 }} label="Right Click" />
        </Popover>
        <br /><br />
        <Popover
          content={this.renderTree()}
          placement='bottom'
        >
          <Button style={{ width: 150 }} label="Tree Select" />
        </Popover>
      </div>
    )
  }
}
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))