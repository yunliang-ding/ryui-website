const input = `const React = require('react')
const ReactDom = require('react-dom')
const { Input } = require('Yui')
class Demo extends React.Component {
  state = {
    value: ''
  }
  setValue = (value) => {
    this.setState({
      value
    })
  }
  render() {
    const dark = true
    return <div className="app-preview">
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
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))
`
const checkBox = `const React = require('react')
const ReactDom = require('react-dom')
const { Select, CheckBox } = require('Yui')
class Demo extends React.Component {
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
    const dark = true
    return (
      <div className="app-preview">
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
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))
`
const radio = `const React = require('react')
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
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))`
const select = `const React = require('react')
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
`
const button = `const React = require('react')
const ReactDom = require('react-dom')
const { Button } = require('Yui')
class Demo extends React.Component {
  render() {
    const dark = true
    return (
      <div className="app-preview" style={{flexDirection: 'row'}}>
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
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))`
const alert = `const React = require('react')
const ReactDom = require('react-dom')
const { Alert, Button } = require('Yui')
class Demo extends React.Component {
  state = {
    show1: false,
    show2: false
  }
  setClose = (key, value) => {
    this.setState({
      [key]: value
    })
  }
  render() {
    const dark = true
    return (
      <div className="app-preview">
        <div style={{ height: 60 }}>
          <Button dark={dark} type={dark ? "normal" : 'primary'} style={{ width: 100 }} label="基本提示框" onClick={
            () => {
              this.setClose('show1', true)
            }
          } /><br />
          <Alert dark={dark} show={this.state.show1} title={'我是提示框'} okText={'我知道了'} onOk={
            () => {
              this.setClose('show1', false)
              alert('我知道了')
            }
          } onClose={
            () => {
              this.setClose('show1', false)
            }
          }>
            这个是一个提示信息
          </Alert>
          <Button dark={dark} type={dark ? "normal" : 'primary'} style={{ width: 100 }} label="基本询问框" onClick={
            () => {
              this.setClose('show2', true)
            }
          } />
          <Alert dark={dark} show={this.state.show2} title={'我是询问框'} cancelText={'取消'} okText={'确定'} onCancel={
            () => {
              this.setClose('show2', false)
              alert('取消');
            }
          } onOk={
            () => {
              this.setClose('show2', false)
              alert('确定');
            }
          } onClose={
            () => {
              this.setClose('show2', false)
            }
          }>
            你要删除这个信息吗？
          </Alert>
        </div>
      </div>
    )
  }
}
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))`
const loading = `const React = require('react')
const ReactDom = require('react-dom')
const { Loading, Button } = require('Yui')
class Demo extends React.Component {
  state = {
    loading: true
  }
  render() {
    const dark = true
    return (
      <div className="app-preview">
        <br />
        <Button dark={dark} style={{ width: 100 }} label={this.state.loading ? "点击完成": '点击加载'} onClick={
          () => {
            this.setState({
              loading: !this.state.loading
            })
          }
        } />
        <br />
        <Loading dark={dark} style={{ height: 120, width: '80%' }} loading={this.state.loading}>
        </Loading>
        <br />
        <Loading dark={dark} style={{ height: 120, width: '80%' }} loading={this.state.loading} options={{
          background: '#16b4a7',
          iconColor: '#fff'
        }}>
        </Loading>
        <br />
        <Loading dark={dark} style={{ height: 120, width: '80%' }} loading={this.state.loading} options={{
          icon: 'icon-shuaxin'
        }}>
        </Loading>
      </div>
    )
  }
}
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))`
const table = `const React = require('react')
const ReactDom = require('react-dom')
const { Table, Button } = require('Yui')
class Demo extends React.Component {
  state = {
    data: [{
      key: Math.random(),
      no: 1,
      application: '用户管理',
      role: '管理员',
      count: 1
    }, {
      key: Math.random(),
      no: 2,
      application: '开发手册',
      role: '技术人员',
      count: 2
    }, {
      key: Math.random(),
      no: 3,
      application: '后台录入',
      role: '开发人员',
      count: 3
    }, {
      key: Math.random(),
      no: 4,
      application: '前台显示',
      role: '实施运维',
      count: 4
    }]
  }
  render() {
    const dark = true
    const colmun = [{
      label: '序号',
      dataIndex: 'no',
      render: (value, record) => {
        return <Button type='primary' style={{ width: 30 }} label={value} />
      }
    }, {
      label: '应用名称',
      dataIndex: 'application'
    }, {
      label: '应用权限',
      dataIndex: 'role'
    }, {
      label: '子进程数',
      dataIndex: 'count'
    }, {
      label: '操作',
      dataIndex: 'opeartion',
      render: (value, record) => {
        return ['删除', '修改'].map(m => {
          return <Button dark={dark} type='primary' style={{ width: 50, marginRight: 10 }} label={m} onClick={
            () => {
              alert('123')
            }
          } />
        })
      }
    }]
    return (
      <div className='app-preview' style={{justifyContent: 'flex-start'}}>
        <Table dark={dark} style={{ height: 400, marginBottom: 40 }} data={this.state.data} colmun={colmun} />
        <Table dark={dark} style={{ height: 400, marginBottom: 40 }} data={this.state.data} colmun={colmun} styleHeader={{
          background: 'var(--theme-color)',
          color: '#fff'
        }} />
        <Table dark={dark} style={{ height: 400, marginBottom: 40 }} data={this.state.data} colmun={colmun} line={true} />
        <Table dark={dark} style={{ height: 400 }} data={this.state.data} colmun={colmun} colmunSort={true} />
      </div>
    )
  }
}
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))`
const tab = `const React = require('react')
const ReactDom = require('react-dom')
const { Tab } = require('Yui')
class Demo extends React.Component {
  state = {
    info: null,
    data: [{
      key: 1,
      icon: 'icon-react',
      color: '#1296db',
      label: 'index1.jsx',
      tip: '/user/Tabs/src/index.js',
      active: false
    }, {
      key: 2,
      icon: 'icon-react',
      color: '#1296db',
      label: 'index1.jsx',
      tip: '/user/Tabs/src/index.js',
      active: false
    }, {
      key: 3,
      icon: 'icon-react',
      color: '#1296db',
      label: 'index1.jsx',
      tip: '/user/Tabs/src/index.js',
      active: false
    }],
    value: 3
  }
  render() {
    const dark = true
    return (
      <div className="app-preview">
        <Tab
          dark={dark}
          style={{ width: 500 }}
          data={this.state.data}
          value={this.state.value}
          onClick={
            (e) => {
              this.setState({
                value: e.key
              })
            }
          }
        />
        <br />
        <Tab
          dark={dark}
          close
          style={{ width: 500 }}
          data={this.state.data}
          value={this.state.value}
          onRemove={
            (data) => {
              this.setState({
                data: data,
                value: data[0] && data[0].key
              })
            }
          }
          onClick={
            (e) => {
              this.setState({
                value: e.key
              })
            }
          }
        />
      </div>
    )
  }
}
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))`
const pagination = `const React = require('react')
const ReactDom = require('react-dom')
const { Pagination } = require('Yui')
class Demo extends React.Component {
  render() {
    const dark = true
    return (
      <div className="app-preview">
        <Pagination dark={dark} current={1} pagesize={10} total={80} onChange={
          (e) => {
            console.log(e)
          }
        } />
      </div>
    )
  }
}
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))`
const tree = ``
const nav = ``
const Switch = ``
const tooltip = ``
const slider = ``
const message = ``
export default {
  input,
  checkBox,
  radio,
  select,
  button,
  alert,
  loading,
  table,
  tab,
  pagination,
  tree,
  nav,
  'switch': Switch,
  tooltip,
  slider,
  message
}