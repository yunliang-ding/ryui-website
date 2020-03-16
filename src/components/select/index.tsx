import * as React from "react"
import { Select } from '../../Yui/index'
import './index.less'
export default class extends React.Component {
  props: any;
  state = {
    dataList: [{
      key: Math.random(),
      value: 0,
      label: '读书'
    }, {
      key: Math.random(),
      value: 1,
      label: '唱歌',
      disabled: true
    }, {
      key: Math.random(),
      value: 2,
      label: '游泳'
    }],
    valueList: [],
    value: ''
  }
  setValue = (value) => {
    this.setState({
      value
    })
  }
  setValueList = (valueList) => {
    this.setState({
      valueList
    })
  }
  render() {
    const {
      dataList,
      value,
      valueList
    } = this.state
    const setValue = this.setValue
    const setValueList = this.setValueList
    return (
      <div className="app-select">
        <div className="app-select-left">
          <div style={{ width: 300, marginBottom: 16 }}>
            <Select
              placeholder="爱好"
              dataList={dataList}
              value={value}
              onChange={
                (e) => {
                  setValue(e)
                }
              }
            />
          </div>
          <div style={{ width: 300, marginBottom: 16 }}>
            <Select
              placeholder="爱好"
              readonly={true}
              value={value}
              onChange={
                (e) => {
                  setValue(e)
                }
              }
            />
          </div>
          <div style={{ width: 300, marginBottom: 16 }}>
            <Select
              addonBefore={
                <i className="iconfont icon-chazhao" style={{ color: 'var(--theme-color)' }} />
              }
              placeholder="爱好"
              dataList={dataList}
              value={value}
              onChange={
                (e) => {
                  setValue(e)
                }
              }
            />
          </div>
          <div style={{ width: 300, marginBottom: 16 }}>
            <Select
              addonAfter='请选择'
              placeholder="爱好"
              dataList={dataList}
              value={value}
              onChange={
                (e) => {
                  setValue(e)
                }
              }
            />
          </div>
          <div style={{ width: 300, marginBottom: 16 }}>
            <Select
              addonAfter={
                <Select
                  placeholder="选择"
                  value={value}
                  dataList={dataList}
                  style={{
                    border:0,
                    borderLeft: '1px solid #f2f2f2'
                  }}
                  onChange={
                    (e) => {
                      setValue(e)
                    }
                  }
                />
              }
              placeholder="爱好"
              dataList={dataList}
              value={value}
              onChange={
                (e) => {
                  setValue(e)
                }
              }
            />
          </div>
          <div style={{ width: 300, marginBottom: 16 }}>
            <Select
              mode="multiple"
              addonBefore='多选'
              placeholder="请选择"
              dataList={dataList}
              value={valueList}
              onChange={
                (e) => {
                  setValueList(e)
                }
              }
            />
          </div>
        </div>
        <div className="app-select-right">
        </div>
      </div>
    )
  }
}
