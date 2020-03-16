import * as React from 'react'
import { Input } from '../input/index'
import './index.less'
/**
  props: {
    
  }
 */
class Select extends React.Component {
  props: any;
  multipleSelect_node: any;
  addonBefore_node: any;
  addonAfter_node: any;
  selectNode: any;
  state = {
    isOpen: false,
    isActive: false,
    isLeave: false,
    search: null
  }
  toggleSelect = () => { //下拉展开和收起
    this.setState({
      isOpen: !this.state.isOpen,
      isActive: !this.state.isActive,
      isLeave: !this.state.isLeave
    })
  }
  itemSelect = (e) => {
    if (this.props.onChange) {
      this.props.onChange(e)
    }
  }
  componentDidUpdate() {
    if (this.multipleSelect_node) {
      if (this.addonBefore_node) {
        this.addonBefore_node.style.height = this.multipleSelect_node.style.height;
      }
      if (this.addonAfter_node) {
        this.addonAfter_node.style.height = this.multipleSelect_node.style.height;
      }
    }
  }
  render() {
    let { value, dataList } = this.props
    value = value || []
    dataList = dataList || []
    let label = null;
    dataList.map(item => {
      if (item.value == value) {
        label = item.label
      }
    })
    let addonBefore = null
    let addonAfter = null
    let select = null;
    if (this.props.addonBefore) { // 前置按钮
      addonBefore = <span className="ain-select-addonBefore" ref={(node) => { this.addonBefore_node = node }}>
        {this.props.addonBefore}
      </span>
    }
    if (this.props.addonAfter) { // 后置按钮
      addonAfter = <span className="ain-select-addonAfter" ref={(node) => { this.addonAfter_node = node }}>
        {this.props.addonAfter}
      </span>
    }
    if (!this.props.mode) {
      select = <div style={{ borderColor: this.state.isActive ? '#16b4a7' : '#f2f2f2' }} className="ain-select-compont" onClick={this.toggleSelect}>
        <div style={{ width: '90%' }}>
          {label || this.props.placeholder || '请选择'}
        </div>
        <div style={{ width: '10%', minWidth: 20 }}>
          {
            this.state.isOpen
              ?
              <i className="iconfont icon-jiantou" />
              :
              <i className="iconfont icon-jiantou32" />
          }
        </div>
        {
          this.state.isOpen ?
            <div className="ain-select-body">
              {
                dataList.map(item => {
                  return (
                    item.disabled
                      ?
                      <span className="ain-select-body-item-disabled" key={item.key} >{item.label}</span>
                      :
                      <span className={(item.value == value) ? "ain-select-body-item-active" : "ain-select-body-item"} key={item.key} value={item.value} onClick={
                        () => {
                          this.itemSelect(item.value)
                        }
                      }>{item.label}</span>
                  )
                })
              }
            </div>
            : null
        }
      </div>
    }
    if (this.props.mode == 'multiple') {
      let labelList: any = []
      label = null
      dataList.map(item => {
        value && value.map(m => {
          if (item.value == m) {
            labelList.push({
              label: item.label,
              key: Math.random()
            })
          }
        })
      });
      if (labelList != 0) {
        label = labelList.map((m, index) => {
          return (
            <span className="ain-select-compont-multiple-label" key={m.key} onClick={
              (e) => {
                e.stopPropagation()
              }
            }>
              {m.label}
              <i className="iconfont icon-guanbi" style={{ paddingLeft: 4, fontSize: 12, cursor: 'pointer' }} onClick={
                () => {
                  value.splice(index, 1)
                  this.props.onChange(value)
                }
              } />
            </span>
          )
        })
      }
      select = <div ref={(node) => { this.multipleSelect_node = node }} style={{ minHeight: 30, borderColor: this.state.isActive ? '#16b4a7' : '#f2f2f2' }} className="ain-select-compont" onClick={this.toggleSelect}>
        <div style={{ width: '90%' }}>
          {label || this.props.placeholder || '请选择'}
        </div>
        <div style={{ width: '10%', minWidth: 20 }}>
          {
            this.state.isOpen
              ?
              <i className="iconfont icon-jiantou" />
              :
              <i className="iconfont icon-jiantou32" />
          }
        </div>
        {
          this.state.isOpen ?
            <div className="ain-select-body">
              {
                dataList && dataList.map(item => {
                  return (
                    item.disabled
                      ?
                      <span className="ain-select-body-item-disabled" key={item.key} >{item.label}</span>
                      :
                      <span className={value.includes(item.value) ? "ain-select-body-item-active" : "ain-select-body-item"} key={item.key} value={item.value} onClick={
                        () => {
                          if (value.includes(item.value)) {
                            value.splice(value.indexOf(item.value), 1)
                          } else {
                            value.push(item.value)
                          }
                          this.itemSelect(value)
                        }
                      }>{item.label}</span>
                  )
                })
              }
            </div>
            : null
        }
      </div>
    }
    if (this.props.readonly == true) {
      select = <div className="ain-select-compont-disabled">
        <div style={{ width: '90%' }}>
          {label || this.props.placeholder || '请选择'}
        </div>
        <div style={{ width: '10%' }}>
          <i className="iconfont icon-jiantou32" />
        </div>
      </div>
    }
    return (
      <div className="ain-select" ref={(node) => { this.selectNode = node }} style={this.props.style}>
        {addonBefore}
        {select}
        {addonAfter}
      </div>
    )
  }
}
export {
  Select
}