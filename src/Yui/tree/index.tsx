import * as React from 'react'
import './index.less'
import { CheckBox } from '../index';
class Tree extends React.Component {
  state = {
    treeData: []
  }
  props: any;
  componentWillReceiveProps(nextProps) {
    this.setState({
      treeData: nextProps.treeData
    })
  }
  componentWillMount() {
    this.setState({
      treeData: this.props.treeData
    })
  }
  setNodeOpen = (node, childen) => { //  设置 节点 Toggle
    return node.map(m => {
      if (m.key == childen.key) {
        if (m.isOpen == undefined) {
          m.isOpen = true
        } else {
          m.isOpen = !m.isOpen
        }
      } else {
        if (m.node) {
          this.setNodeOpen(m.node, childen)
        }
      }
      return m
    })
  }
  setSelected = (node, childen) => { //  设置 叶子 Toggle
    return node.map(m => {
      if (m.key == childen.key) {
        if (m.selected == undefined) {
          m.selected = true;
        } else {
          m.selected = !m.selected
        }
      } else {
        m.selected = false
        if (m.node) {
          this.setSelected(m.node, childen)
        }
      }
      return m
    })
  }
  setChecked = (node, childen) => { //  设置 叶子 Toggle
    return node.map(m => {
      if (m.key == childen.key) {
        if (m.selected == undefined) {
          m.selected = true;
        } else {
          m.selected = !m.selected
        }
      } else {
        if (m.node) {
          this.setChecked(m.node, childen)
        }
      }
      return m
    })
  }
  nodeClick = (node) => {
    if (this.props.onClick) {
      this.props.onClick(node)
    }
    if (!this.props.stopDefaultEvent) {
      if (node.isLeaf) {
        let treeData = this.setSelected(this.state.treeData, node)
        this.setState({
          treeData
        }, () => {
          if (this.props.onChange) {
            this.props.onChange(node)
          }
        })
      } else {
        let treeData = this.setNodeOpen(this.state.treeData, node)
        this.setState({
          treeData
        }, () => {
          if (this.props.onChange) {
            this.props.onChange(node)
          }
        })
      }
    }
  }
  checkBoxClick = (node) => { // 多选组件点击
    if (this.props.onClick) {
      this.props.onClick(node)
    }
    if (node.isLeaf) {
      let treeData = this.setChecked(this.state.treeData, node)
      this.setState({
        treeData
      }, () => {
        if (this.props.onChange) {
          this.props.onChange(node)
        }
      })
    } else {
      let treeData = this.setNodeOpen(this.state.treeData, node)
      this.setState({
        treeData
      }, () => {
        if (this.props.onChange) {
          this.props.onChange(node)
        }
      })
    }
  }
  callBack = (item, padding) => {
    return item && item.map((node) => {
      let { color, icon } = node
      if (node.isOpen) {
        icon = node.icon2
      }
      let className = (node.isLeaf && this.props.type === 'simple' ) ? (node.selected ? "yui-tree-node yui-tree-leaf-active" : "yui-tree-node yui-tree-leaf") : 'yui-tree-node'
      return (
        this.props.type === 'simple'
          ?
          <div key={node.key} className={className} >
            <div style={{
              padding: 2,
              paddingLeft: padding,
              display: 'flex',
              justifyContent: 'left',
              alignItems: 'center',
              cursor: 'pointer',
              width: '100%'
            }} 
            onClick={() => {
              this.nodeClick(node)
            }}>
              <span><i className={"iconfont " + icon} style={{ color }} /></span>
              <span style={{ width: '100%', paddingLeft: 8 }}>
                {node.label}
              </span>
            </div>
            {(node.node != undefined && node.isOpen) ? this.callBack(node.node, padding + 20) : null}
          </div>
          :
          <div key={node.key} className={className}>
            <div style={{
              padding: 2,
              paddingLeft: padding,
              display: 'flex',
              justifyContent: 'left',
              alignItems: 'center',
              cursor: 'pointer',
              width: '100%'
            }} 
            onClick={() => {
              this.nodeClick(node)
            }}>
              <span><i className={"iconfont " + icon} style={{ color }} /></span>
              <span style={{ width: '100%', paddingLeft: 8 }}>
                {
                  node.isLeaf
                    ?
                    <span>
                      <CheckBox style={{height:16}} value={node.selected ? [node.key] : []} dataList={[{ label: node.label, value: node.key }]} onChange={
                        (e) => {
                          console.log(e)
                        }
                      } />
                    </span>
                    :
                    <span>{node.label}</span>
                }
              </span>
            </div>
            {(node.node != undefined && node.isOpen) ? this.callBack(node.node, padding + 20) : null}
          </div>
      )
    });
  }
  render() {
    let tree_dom = this.callBack(this.state.treeData, 16)
    const theme = this.props.dark ? '-dark' : ''
    return <div className={"yui-tree"+theme} style={this.props.style}>
      {tree_dom}
    </div>
  }
}
export {
  Tree
}