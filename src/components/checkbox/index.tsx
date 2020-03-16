import * as React from "react"
import { Select, CheckBox } from '../../Yui/index'
import './index.less'
export default class extends React.Component {
  props: any;
  state = {
    value: 0,
    valueList: [1],
    dataList: [{
      key:Math.random(),
      value:0,
      label:'读书'
    },{
      key:Math.random(),
      value:1,
      label:'唱歌',
    },{
      key:Math.random(),
      value:2,
      label:'跳舞',
    },{
      key:Math.random(),
      value:3,
      label:'游泳',
      disabled:true,
    }]
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
    const {dataList, valueList, value} = this.state
    return (
      <div className="app-checkbox">
        <div className="app-checkbox-left">
          <div style={{ width: 300, marginBottom: 20 }}>
            <CheckBox dataList={dataList} value={valueList} onChange={
              (e) => {
                this.setValueList(e)
              }
            } />
          </div>
          <div style={{ width: 300, marginBottom: 20 }}>
            <CheckBox readonly={true} dataList={dataList} value={valueList} onChange={
              (e) => {
                this.setValueList(e)
              }
            } />
          </div>
          <div style={{ width: 330, marginBottom: 20 }} >
            <CheckBox addonBefore='爱好' dataList={dataList} value={valueList} onChange={
              (e) => {
                this.setValueList(e)
              }
            } />
          </div>
          <div style={{ width: 330, marginBottom: 20 }} >
            <CheckBox addonAfter={
              <i className="iconfont icon-chazhao" style={{ color: 'var(--theme-color)' }} />
            } dataList={dataList} value={valueList} onChange={
              (e) => {
                this.setValueList(e)
              }
            } />
          </div>
          <div style={{ width: 350, marginBottom: 20 }}>
            <CheckBox addonBefore={
              <Select
                style={{
                  border: 0,
                  background:'none'
                }}
                placeholder="选择"
                dataList={dataList}
                value={value}
                onChange={
                  (e) => {
                    this.setValue(e)
                  }
                }
              />
            }
              dataList={dataList}
              value={valueList}
              onChange={
                (e) => {
                  this.setValueList(e)
                }
              }
            />
          </div>
        </div>
        <div className="app-checkbox-right">
          <div style={{ width: 300, marginBottom: 20 }}>
            <CheckBox dark dataList={dataList} value={valueList} onChange={
              (e) => {
                this.setValueList(e)
              }
            } />
          </div>
          <div style={{ width: 300, marginBottom: 20 }}>
            <CheckBox dark readonly={true} dataList={dataList} value={valueList} onChange={
              (e) => {
                this.setValueList(e)
              }
            } />
          </div>
          <div style={{ width: 330, marginBottom: 20 }} >
            <CheckBox dark addonBefore='爱好' dataList={dataList} value={valueList} onChange={
              (e) => {
                this.setValueList(e)
              }
            } />
          </div>
          <div style={{ width: 330, marginBottom: 20 }} >
            <CheckBox dark addonAfter={
              <i className="iconfont icon-chazhao" style={{ color: 'var(--theme-color)' }} />
            } dataList={dataList} value={valueList} onChange={
              (e) => {
                this.setValueList(e)
              }
            } />
          </div>
          <div style={{ width: 350, marginBottom: 20 }}>
            <CheckBox dark addonBefore={
              <Select
                dark
                style={{
                  border: 0,
                  background:'none'
                }}
                placeholder="选择"
                dataList={dataList}
                value={value}
                onChange={
                  (e) => {
                    this.setValue(e)
                  }
                }
              />
            }
              dataList={dataList}
              value={valueList}
              onChange={
                (e) => {
                  this.setValueList(e)
                }
              }
            />
          </div>
        </div>
      </div>
    )
  }
}
