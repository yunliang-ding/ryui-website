const input = `import * as React from "react"
import { Input } from '../../Yui/index'
import './index.less'
import { observer, inject } from 'mobx-react'
@inject('UI')
@observer
export default class extends React.Component {
  props: any;
  state = {
    value: ''
  }
  setValue = (value) => {
    this.setState({
      value
    })
  }
  render() {
    const { dark } = this.props.UI
    return <div className="app-input">
      <div style={{ width: 300, marginBottom: 20 }}>
        <Input dark={dark} placeholder='姓名' value={this.state.value} onChange={
          (e) => {
            this.setValue(e.target.value)
          }
        } />
      </div>
      <div style={{ width: 300, marginBottom: 20 }}>
        <Input dark={dark} readonly={true} placeholder='姓名' value={this.state.value} />
      </div>
      <div style={{ width: 300, marginBottom: 20 }}>
        <Input dark={dark} placeholder='姓名' value={this.state.value} onChange={
          (e) => {
            this.setValue(e.target.value)
          }
        } addonBefore='姓名' />
      </div>
      <div style={{ width: 300, marginBottom: 20 }}>
        <Input dark={dark} placeholder='姓名' value={this.state.value} onChange={
          (e) => {
            this.setValue(e.target.value)
          }
        } addonAfter={<i className="iconfont icon-chazhao" style={{ color: 'var(--theme-color)' }} />} />
      </div>
      <div style={{ width: 300, marginBottom: 20 }}>
        <Input dark={dark} placeholder='姓名' value={this.state.value} onChange={
          (e) => {
            this.setValue(e.target.value)
          }
        } />
      </div>
      <div style={{ width: 300, marginBottom: 20 }}>
        <Input dark={dark} type="textArea" placeholder='姓名' value={this.state.value} onChange={
          (e) => {
            this.setValue(e.target.value)
          }
        } />
      </div>
    </div>
  }
}
`
const checkBox = `import * as React from "react"
import { Select, CheckBox } from '../../Yui/index'
import './index.less'
import { observer, inject } from 'mobx-react'
@inject('UI')
@observer
export default class extends React.Component {
  props: any;
  state = {
    value: 0,
    valueList: [1],
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
    const { dark } = this.props.UI
    return (
      <div className="app-checkbox">
        <div style={{ width: 300, marginBottom: 20 }}>
          <CheckBox dark={dark} dataList={dataList} value={valueList} onChange={
            (e) => {
              this.setValueList(e)
            }
          } />
        </div>
        <div style={{ width: 300, marginBottom: 20 }}>
          <CheckBox dark={dark} readonly={true} dataList={dataList} value={valueList} onChange={
            (e) => {
              this.setValueList(e)
            }
          } />
        </div>
        <div style={{ width: 430, marginBottom: 20 }} >
          <CheckBox dark={dark} addonBefore='爱好' dataList={dataList} value={valueList} onChange={
            (e) => {
              this.setValueList(e)
            }
          } />
        </div>
        <div style={{ width: 430, marginBottom: 20 }} >
          <CheckBox dark={dark} addonAfter={
            <i className="iconfont icon-chazhao" style={{ color: 'var(--theme-color)' }} />
          } dataList={dataList} value={valueList} onChange={
            (e) => {
              this.setValueList(e)
            }
          } />
        </div>
        <div style={{ width: 430, marginBottom: 20 }}>
          <CheckBox dark={dark} addonBefore={
            <Select
              dark={dark}
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
      </div>
    )
  }
}
`
const radio = `import * as React from "react"
import { Select, Radio } from '../../Yui/index'
import './index.less'
import { observer, inject } from 'mobx-react'
@inject('UI')
@observer
export default class extends React.Component {
  props: any
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
    const { dark } = this.props.UI
    return (
      <div className="app-radio">
        <div style={{ width: 300, marginBottom: 20 }}>
          <Radio dark={dark} dataList={dataList} value={value} onChange={
            (e) => {
              this.setValue(e)
            }
          } />
        </div>
        <div style={{ width: 300, marginBottom: 20 }}>
          <Radio dark={dark} readonly={true} dataList={dataList} value={value} />
        </div>
        <div style={{ width: 360, marginBottom: 20 }} >
          <Radio dark={dark} addonBefore='爱好' dataList={dataList} value={value} onChange={
            (e) => {
              this.setValue(e)
            }
          } />
        </div>
        <div style={{ width: 360, marginBottom: 20 }} >
          <Radio dark={dark} addonAfter={
            <i className="iconfont icon-chazhao" style={{ color: 'var(--theme-color)' }} />
          } dataList={dataList} value={value} onChange={
            (e) => {
              this.setValue(e)
            }
          } />
        </div>
        <div style={{ width: 400, marginBottom: 20 }}>
          <Radio dark={dark} addonBefore={
            <Select
              dark={dark}
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
      </div>
    )
  }
}
`
const select = `import * as React from "react"
import { Select } from '../../Yui/index'
import './index.less'
import { observer, inject } from 'mobx-react'
@inject('UI')
@observer
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
    const { dark } = this.props.UI
    return (
      <div className="app-select">
        <Select
          dark={dark}
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
          dark={dark}
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
          dark={dark}
          style={{ width: 300, marginBottom: 16 }}
          addonBefore={
            <i className="iconfont icon-chazhao" style={{ color: 'var(--theme-color)' }} />
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
          dark={dark}
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
          dark={dark}
          style={{ width: 300, marginBottom: 16 }}
          addonAfter={
            <Select
              dark={dark}
              placeholder="选择"
              value={value}
              dataList={dataList}
              style={{
                border: 0,
                borderLeft: dark ? '1px solid #333' : '1px solid #f2f2f2'
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
          dark={dark}
          style={{ width: 300, marginBottom: 16 }}
          mode="multiple"
          clear
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
    )
  }
}
`
const button = `import * as React from "react"
import { Button } from '../../Yui/index'
import './index.less'
import { observer, inject } from 'mobx-react'
@inject('UI')
@observer
export default class extends React.Component {
  props: any
  render() {
    const { dark } = this.props.UI
    return (
      <div className="app-button">
        <div>
          <Button dark={dark} style={{ width: 100, margin: 4 }} label="normal" onClick={() => {
            alert('normal')
          }} />
          <Button type="primary" style={{ width: 100, margin: 4 }} label="primary" onClick={() => {
            alert('primary')
          }} />
          <Button type="warm" style={{ width: 100, margin: 4 }} label="warm" onClick={() => {

          }} />
          <Button type="blue" style={{ width: 100, margin: 4 }} label="blue" onClick={() => {

          }} />
          <Button type="danger" style={{ width: 100, margin: 4 }} label="danger" onClick={() => {

          }} />
          <Button dark={dark} type="disabled" style={{ width: 100, margin: 4 }} label="disabled" onClick={() => {

          }} />
        </div>
        <div>
          <Button dark={dark} style={{ width: 100, margin: 4 }} label={
            <i className="iconfont icon-fenxiang" />
          } onClick={() => {
            alert('iconfont')
          }} />
          <Button type="primary" style={{ width: 100, margin: 4 }} label={
            <i className="iconfont icon-git" />
          } onClick={() => {
            alert('icon-chuangjian')
          }} />
          <Button type="warm" style={{ width: 100, margin: 4 }} label={
            <i className="iconfont icon-icon_yingyongguanli" />
          } onClick={() => {

          }} />
          <Button type="blue" style={{ width: 100, margin: 4 }} label={
            <i className="iconfont icon-tuichu" />
          } onClick={() => {

          }} />
          <Button type="danger" style={{ width: 100, margin: 4 }} label={
            <i className="iconfont icon-github" />
          } onClick={() => {

          }} />
          <Button dark={dark} type="disabled" style={{ width: 100, margin: 4 }} label={
            <i className="iconfont icon-chazhao" />
          } onClick={() => {

          }} />
        </div>
      </div>
    )
  }
}
`
export default {
  input,
  checkBox,
  radio,
  select,
  button
}