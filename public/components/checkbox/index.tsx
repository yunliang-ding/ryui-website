// @ts-nocheck
import React from 'react'
import ReactDom from 'react-dom'
import { Select, CheckBox } from 'ryui'
class Demo extends React.Component {
  state = {
    value: 0,
    valueList: [3],
    dataList: [{
      key: Math.random(),
      value: 0,
      label: '读书'
    }, {
      key: Math.random(),
      value: 1,
      label: '唱歌',
    }, {
      key: Math.random(),
      value: 2,
      label: '跳舞',
    }, {
      key: Math.random(),
      value: 3,
      label: '游泳',
      disabled: true,
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
    const { dataList, valueList, value } = this.state
    return (
      <div className="app-preview">
        <CheckBox
          dataList={dataList}
          value={valueList}
          onChange={
            (e) => {
              this.setValueList(e)
            }
          }
        />
        <br />
        <CheckBox
          readonly={true}
          dataList={dataList}
          value={valueList}
          onChange={
            (e) => {
              this.setValueList(e)
            }
          }
        />
        <br />
        <CheckBox
          style={{ width: 400 }}
          addonBefore='爱好'
          dataList={dataList}
          value={valueList}
          onChange={
            (e) => {
              this.setValueList(e)
            }
          }
        />
        <br />
        <CheckBox
          style={{ width: 400 }}
          addonAfter={
            <i className="iconfont icon--buju" />
          }
          dataList={dataList}
          value={valueList}
          onChange={
            (e) => {
              this.setValueList(e)
            }
          }
        />
        <br />
        <CheckBox
          style={{ width: 400 }}
          addonBefore={
            <Select
              style={{
                border: 0,
                background: 'none'
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
    )
  }
}
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))
