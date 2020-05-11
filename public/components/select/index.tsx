// @ts-nocheck
import React from 'react'
import ReactDom from 'react-dom'
import { Select} from 'ryui'
class Demo extends React.Component {
  state = {
    dataList: [{
      key: Math.random(),
      value: 0,
      label: '文字超出文本范围'
    }, {
      key: Math.random(),
      value: 1,
      label: '唱歌',
      disabled: true
    }, {
      key: Math.random(),
      value: 2,
      label: '游泳'
    }, {
      key: Math.random(),
      value: 3,
      label: '读书'
    }, {
      key: Math.random(),
      value: 4,
      label: '唱歌'
    }, {
      key: Math.random(),
      value: 5,
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
      <div className="app-preview">
        <Select
          clear
          style={{ width: 300, marginBottom: 16 }}
          placeholder="请选择"
          dataList={dataList}
          value={value}
          onChange={
            (e) => {
              setValue(e)
            }
          }
        />
        <Select
          style={{ width: 300, marginBottom: 16 }}
          placeholder="请选择"
          readonly={true}
          dataList={dataList}
          value={value}
          onChange={
            (e) => {
              setValue(e)
            }
          }
        />
        <Select
          style={{ width: 300, marginBottom: 16 }}
          addonBefore={
            <i className="iconfont icon-hezi" style={{ color: 'var(--theme-color)' }} />
          }
          placeholder="请选择"
          dataList={dataList}
          value={value}
          onChange={
            (e) => {
              setValue(e)
            }
          }
        />
        <Select
          style={{ width: 300, marginBottom: 16 }}
          addonAfter='请选择'
          placeholder="请选择"
          dataList={dataList}
          value={value}
          onChange={
            (e) => {
              setValue(e)
            }
          }
        />
        <Select
          style={{ width: 300, marginBottom: 16 }}
          addonAfter={
            <Select
              placeholder="选择"
              value={value}
              dataList={dataList}
              style={{
                border: 0
              }}
              onChange={
                (e) => {
                  setValue(e)
                }
              }
            />
          }
          placeholder="请选择"
          dataList={dataList}
          value={value}
          onChange={
            (e) => {
              setValue(e)
            }
          }
        />
        <Select
          style={{ width: 300, marginBottom: 16 }}
          mode="multiple"
          clear
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
    )
  }
}
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))
