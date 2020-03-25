const React = require('react')
const ReactDom = require('react-dom')
const { Select, Radio  } = require('Yui')
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
    const dark = true
    return (
      <div className="app-preview">
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
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))