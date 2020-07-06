// @ts-nocheck
import React from 'react'
import ReactDom from 'react-dom'
import { Select, Radio } from 'react-ryui'
class Demo extends React.Component {
  state = {
    value: 0,
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
  render() {
    const { dataList, value } = this.state
    return (
      <div className="app-preview">
        <Radio
          dataList={dataList}
          value={value}
          onChange={
            (e) => {
              this.setValue(e)
            }
          }
        />
        <br />
        <Radio
          readonly={true}
          dataList={dataList}
          value={value}
        />
        <br />
        <Radio
          style={{ width: 400 }}
          addonBefore='爱好'
          dataList={dataList}
          value={value}
          onChange={
            (e) => {
              this.setValue(e)
            }
          }
        />
        <br />
        <Radio
          style={{ width: 400 }}
          addonAfter={
            <i className="iconfont icon--buju" />
          }
          dataList={dataList}
          value={value}
          onChange={
            (e) => {
              this.setValue(e)
            }
          }
        />
        <br />
        <Radio
          style={{ width: 400 }}
          addonBefore={
            <Select
              style={{
                border: 0
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
          value={value}
          onChange={
            (e) => {
              this.setValue(e)
            }
          }
        />
      </div>
    )
  }
}
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))