const React = require('react')
const ReactDom = require('react-dom')
const { Select } = require('Yui')
class Demo extends React.Component {
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
    const dark = true
    return (
      <div className="app-preview">
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
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))
