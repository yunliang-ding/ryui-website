const input = `const { Input } = Yui
class Demo extends React.Component{
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
ReactDOM.render(<Demo />, document.querySelector('#root'))
`
const checkBox = `import * as React from "react"
import { Select, CheckBox } from 'Yui'
export default class extends React.Component {
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
import { Select, Radio } from 'Yui'
export default class extends React.Component {
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
import { Select } from 'Yui'
export default class extends React.Component {
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
import { Button } from 'Yui'
export default class extends React.Component {
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
const alert = `import * as React from "react"
import { Alert, Button } from 'Yui'
export default class extends React.Component {
  state = {
    show1: false,
    show2: false,
    show3: false,
    show4: false
  }
  setClose = (key, value) => {
    this.setState({
      [key]: value
    })
  }
  render() {
    const { dark } = this.props.UI
    return (
      <div className="app-alert">
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
`
const loading = `import * as React from "react"
import { Loading, Button } from 'Yui'
export default class extends React.Component {
  state = {
    loading: true
  }
  render() {
    const { dark } = this.props.UI
    return (
      <div className="app-loading">
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
`
const table = `import * as React from "react"
import { Table, Button } from 'Yui'
export default class extends React.Component {
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
    const { dark } = this.props.UI
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
      dataIndex: "opeartion",
      render: (value, record) => {
        return ['删除', '修改'].map(m => {
          return <Button dark={dark} type={dark ? 'normal' : 'primary'} style={{ width: 50, marginRight: 10 }} label={m} onClick={
            () => {
              alert('123')
            }
          } />
        })
      }
    }]
    return (
      <div className="app-table">
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
`
const tab = `import * as React from "react"
import { Tab } from 'Yui'
export default class extends React.Component {
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
    const { dark } = this.props.UI
    return (
      <div className="app-tab">
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
`
const pagination = `import * as React from "react"
import { Pagination } from 'Yui'
export default class extends React.Component {
  render() {
    const { dark } = this.props.UI
    return (
      <div className="app-pagination">
        <Pagination dark={dark} current={1} pagesize={10} total={80} onChange={
          (e) => {
            console.log(e)
          }
        } />
      </div>
    )
  }
}
`
const tree = `import * as React from "react"
import { Tree } from 'Yui'
export default class extends React.Component {
  state = {
    info1: '点击显示节点信息',
    info2: '点击显示节点信息',
    data: [{
      key: Math.random(),
      icon: 'icon-jiantou34',
      icon2: 'icon-jiantou32',
      isLeaf: false,
      color: '',
      label: 'Tree',
      isOpen: true,
      node: [{
        key: Math.random(),
        icon: 'icon-react',
        color: '#1296db',
        label: 'index.jsx',
        isLeaf: true
      }, {
        key: Math.random(),
        icon: 'icon-less',
        color: '#1E9FFF',
        label: 'index.less',
        isLeaf: true,
      }, {
        key: Math.random(),
        color: '',
        icon: 'icon-jiantou34',
        icon2: 'icon-jiantou32',
        isLeaf: false,
        label: 'Tree2',
        isOpen: true,
        node: [{
          key: Math.random(),
          icon: 'icon-react',
          color: '#1296db',
          label: 'index.jsx',
          isLeaf: true,
        }]
      }]
    }, {
      key: Math.random(),
      icon: 'icon-jiantou34',
      color: '',
      label: 'Button',
      icon2: 'icon-jiantou32',
      isLeaf: false,
      isOpen: true,
      node: [{
        key: Math.random(),
        icon: 'icon-react',
        color: '#1296db',
        label: 'index.jsx',
        isLeaf: true,
      }, {
        key: Math.random(),
        icon: 'icon-less',
        color: '#1E9FFF',
        label: 'index.less',
        isLeaf: true,
      }, {
        key: Math.random(),
        icon: 'icon-react',
        color: '#1296db',
        label: 'store.jsx',
        isLeaf: true,
      }]
    }, {
      key: Math.random(),
      icon: 'icon-jiantou34',
      color: '',
      label: 'Select',
      icon2: 'icon-jiantou32',
      isLeaf: false,
      node: [{
        key: Math.random(),
        icon: 'icon-react',
        color: '#1296db',
        label: 'index.jsx',
        isLeaf: true,
      }, {
        key: Math.random(),
        icon: 'icon-less',
        color: '#1E9FFF',
        label: 'index.less',
        isLeaf: true,
      }, {
        key: Math.random(),
        icon: 'icon-react',
        color: '#1296db',
        label: 'store.jsx',
        isLeaf: true,
      }]
    }, {
      key: Math.random(),
      icon: 'icon-react',
      color: '#1296db',
      label: 'app.jsx',
      icon2: 'icon-jiantou32',
      isLeaf: true,
    }, {
      key: Math.random(),
      icon: 'icon-react',
      color: '#FF5722',
      label: 'react.jsx',
      icon2: 'icon-jiantou32',
      isLeaf: true,
    }],
    data2: [
      {
        key: Math.random(),
        icon: 'icon-jiantou34',
        icon2: 'icon-jiantou32',
        isLeaf: false,
        color: '',
        label: 'Tree',
        isOpen: true,
        node: [{
          key: Math.random(),
          icon: 'icon-react',
          color: '#1296db',
          label: 'index.jsx',
          isLeaf: true
        }, {
          key: Math.random(),
          icon: 'icon-less',
          color: '#1E9FFF',
          label: 'index.less',
          isLeaf: true,
        }, {
          key: Math.random(),
          color: '',
          icon: 'icon-jiantou34',
          icon2: 'icon-jiantou32',
          isLeaf: false,
          label: 'Tree2',
          isOpen: true,
          node: [{
            key: Math.random(),
            icon: 'icon-react',
            color: '#1296db',
            label: 'index.jsx',
            isLeaf: true,
          }]
        }]
      }, {
        key: Math.random(),
        icon: 'icon-jiantou34',
        color: '',
        label: 'Button',
        icon2: 'icon-jiantou32',
        isLeaf: false,
        isOpen: true,
        node: [{
          key: Math.random(),
          icon: 'icon-react',
          color: '#1296db',
          label: 'index.jsx',
          isLeaf: true,
        }, {
          key: Math.random(),
          icon: 'icon-less',
          color: '#1E9FFF',
          label: 'index.less',
          isLeaf: true,
        }, {
          key: Math.random(),
          icon: 'icon-react',
          color: '#1296db',
          label: 'store.jsx',
          isLeaf: true,
        }]
      }, {
        key: Math.random(),
        icon: 'icon-jiantou34',
        color: '',
        label: 'Select',
        icon2: 'icon-jiantou32',
        isLeaf: false,
        node: [{
          key: Math.random(),
          icon: 'icon-react',
          color: '#1296db',
          label: 'index.jsx',
          isLeaf: true,
        }, {
          key: Math.random(),
          icon: 'icon-less',
          color: '#1E9FFF',
          label: 'index.less',
          isLeaf: true,
        }, {
          key: Math.random(),
          icon: 'icon-react',
          color: '#1296db',
          label: 'store.jsx',
          isLeaf: true,
        }]
      }, {
        key: Math.random(),
        icon: 'icon-react',
        color: '#1296db',
        label: 'app.jsx',
        icon2: 'icon-jiantou32',
        isLeaf: true,
      }, {
        key: Math.random(),
        icon: 'icon-react',
        color: '#FF5722',
        label: 'react.jsx',
        icon2: 'icon-jiantou32',
        isLeaf: true,
      }],
    tabs: [{
      key: Math.random(),
      icon: 'icon-react',
      color: '#1296db',
      label: 'index.jsx',
      tip: '/user/Tabs/src/index.jsx',
      active: false
    }, {
      key: Math.random(),
      icon: 'icon-less',
      color: '#1E9FFF',
      label: 'index.less',
      tip: '/user/Tabs/src/index.jsx',
      active: true
    }, {
      key: Math.random(),
      icon: 'icon-react',
      color: '#1296db',
      label: 'webpack.config.prod.jsx',
      tip: '/user/Tabs/src/index.jsx',
      active: false
    }, {
      key: Math.random(),
      icon: 'icon-react',
      color: '#1296db',
      label: 'index.jsx',
      tip: '/user/Tabs/src/index.jsx',
      active: false
    }, {
      key: Math.random(),
      icon: 'icon-less',
      color: '#1E9FFF',
      label: 'index.less',
      tip: '/user/Tabs/src/index.jsx',
      active: false
    }, {
      key: Math.random(),
      icon: 'icon-react',
      color: '#1296db',
      label: 'webpack.config.prod.jsx',
      tip: '/user/Tabs/src/index.jsx',
      active: false
    }]
  }
  
  render() {
    const { dark } = this.props.UI
    return (
      <div className="app-tree">
        <Tree
          style={{
            width: 200,
            height: 500,
            background: dark ? '#333' : '#dcdcdc'
          }}
          dark={dark}
          type="simple"
          treeData={this.state.data}
          onClick={
            (e) => {
              console.log(e)
            }
          }
          onChange={
            (e) => {
              console.log(e)
            }
          }
        />
        <Tree
          style={{
            width: 200,
            height: 500,
            marginLeft: 50,
            background: dark ? '#333' : '#dcdcdc'
          }}
          dark={dark}
          treeData={this.state.data2}
          onClick={
            (e) => {
              console.log(e)
            }
          }
          onChange={
            (e) => {
              console.log(e)
            }
          }
        />
      </div>
    )
  }
}
`
const nav = `import * as React from "react"
import { Nav, Select, Button } from '../../Yui/index'
export default class extends React.Component {
  state = {
    value: 0,
    navList: [{
      key: Math.random(),
      label: <span>通用</span>,
      active: true
    }, {
      key: Math.random(),
      label: <span>布局</span>,
      disabled: true,
      active: false
    }, {
      key: Math.random(),
      label: <span>导航</span>,
      active: false
    }, {
      key: Math.random(),
      label: null,
      active: false,
    }],
    navListDark: [{
      key: Math.random(),
      label: <span>通用</span>,
      active: true
    }, {
      key: Math.random(),
      label: <span>布局</span>,
      disabled: true,
      active: false
    }, {
      key: Math.random(),
      label: <span>导航</span>,
      active: false
    }, {
      key: Math.random(),
      label: null,
      active: false,
    }],
    menu: [{
      key: '1',
      icon: 'icon-github',
      label: '个人中心',
      subMenu: [{
        key: '1-2',
        icon: 'icon-fenxiang',
        label: '我的信息'
      }, {
        key: '1-3',
        icon: 'icon-fenxiang',
        label: '个人中心'
      }, {
        key: '1-4',
        icon: 'icon-tuichu',
        disabled: true,
        label: '我的提交'
      }]
    }, {
      key: '2',
      disabled: true,
      icon: 'icon-icon_yingyongguanli',
      label: '信息管理'
    }, {
      key: '3',
      icon: 'icon-icon_yingyongguanli',
      label: '信息中心'
    }],
    collapsed: false,
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
    selectValue: ''
  }
  setSelectValue = (selectValue) => {
    this.setState({
      selectValue
    })
  }
  render() {
    const { dark } = this.props.UI
    let navList = this.state.navList;
    let navListDark = this.state.navListDark;
    navList[3].label = <Select
      placeholder="选择"
      style={{
        border: 0,
        width: 60
      }}
      dataList={this.state.dataList}
      value={this.state.selectValue}
      onChange={
        (e) => {
          this.setSelectValue(e)
        }
      }
    />
    navListDark[3].label = <Select
      dark
      placeholder="选择"
      style={{
        border: 0,
        width: 60
      }}
      dataList={this.state.dataList}
      value={this.state.selectValue}
      onChange={
        (e) => {
          this.setSelectValue(e)
        }
      }
    />
    return <div className="app-nav">
      <Nav dark={dark} logo={
        <i className="iconfont icon-UI1" style={{ fontSize: 30, color: 'var(--theme-color)' }} />
      }
        navList={dark ? this.state.navListDark : this.state.navList} menuClick={
          (nav) => {
            console.log(nav)
          }
        }
      />
      <br />
      <Nav dark={dark} logo={
        <i className="iconfont icon-UI1" style={{ fontSize: 30, color: 'var(--theme-color)' }} />
      }
        type="right"
        navList={dark ? this.state.navListDark : this.state.navList} menuClick={
          (nav) => {
            console.log(nav)
          }
        }
      />
      <br />
      <Button
        dark={dark}
        type="primary"
        style={{ width: this.state.collapsed ? 40 : 200 }}
        label={
          <i className={this.state.collapsed ? "iconfont icon-zhankai1" : "iconfont icon-shouqi"} style={{ color: '#fff' }} />
        }
        onClick={() => {
          this.setState({
            collapsed: !this.state.collapsed
          })
        }}
      />
      <Nav
        dark={dark}
        style={{ width: 200, height: 300 }}
        model="menu"
        navList={this.state.menu}
        menuClick={
          (openkey, selectKey) => {
            console.log(openkey, selectKey)
          }
        }
        openKey={['1']}
        selectKey={['1-2']}
        collapsed={this.state.collapsed}
      />
    </div>
  }
}
`
const Switch = `import * as React from "react"
import { Switch } from 'Yui'
export default class extends React.Component {
  render() {
    const { dark } = this.props.UI
    return (
      <div className="app-switch">
        <Switch
          dark={dark}
          checked
          onChange={
            (e) => {
              console.log(e)
            }
          } 
        />
        <br />
        <Switch
          dark={dark}
          disabled
          onChange={
            (e) => {
              console.log(e)
            }
          } 
        />
        <br />
        <Switch
          dark={dark}
          checked
          checkedNode={<span>开</span>}
          unCheckedNode={<span>关</span>}
          onChange={
            (e) => {
              console.log(e)
            }
          } 
        />
        <br />
        <Switch
          dark={dark}
          checked
          checkedNode={<i className='iconfont icon-duihao'></i>}
          unCheckedNode={<i className='iconfont icon-guanbi'></i>}
          onChange={
            (e) => {
              console.log(e)
            }
          } 
        />
        <br />
        <Switch
          dark={dark}
          checked
          loading
          onChange={
            (e) => {
              console.log(e)
            }
          } 
        />
        <br />
        <Switch
          dark={dark}
          loading
          onChange={
            (e) => {
              console.log(e)
            }
          } 
        />
      </div>
    )
  }
}
`
const tooltip = `import * as React from "react"
import { Tooltip, Button } from 'Yui'
export default class extends React.Component {
  render() {
    const { dark } = this.props.UI
    return (
      <div className="app-tooltip">
        <div style={{marginBottom: 20}}>
          <Tooltip
            dark={dark}
            title={<span>音乐不是我的全部</span>}
            trigger='hover'
            placement='right'
          >
            <Button dark={dark} style={{ width: 100 }}  label="Right" />
          </Tooltip>
        </div>
        <div style={{marginBottom: 50}}>
          <Tooltip
            dark={dark}
            title={<span>音乐不是我的全部</span>}
            trigger='hover'
            placement='left'
          >
            <Button dark={dark} style={{ width: 100 }}  label="Left" />
          </Tooltip>
        </div>
        <div style={{marginBottom: 20}}>
          <Tooltip
            dark={dark}
            title={<span>音乐不是我的全部</span>}
            trigger='hover'
            placement='top'
          >
            <Button dark={dark} style={{ width: 100 }}  label="Top" />
          </Tooltip>
        </div>
         <div style={{marginBottom: 20}}>
          <Tooltip
            dark={dark}
            title={<span>音乐不是我的全部</span>}
            trigger='hover'
            placement='bottom'
          >
            <Button dark={dark} style={{ width: 100 }}  label="Bottom" />
          </Tooltip>
        </div>
      </div>
    )
  }
}
`
const slider = `import * as React from "react"
import { Slider } from 'Yui'
export default class extends React.Component {
  render() {
    const { dark } = this.props.UI
    return (
      <div className="app-sider">
        <Slider 
          dark={dark}
          siderWidth={300}
          progress={20}
          onChange={
            (e) => {
              console.log(e)
            }
          }
        />
        <br />
        <br />
        <Slider 
          dark={dark}
          siderWidth={300}
          siderHeight={12}
          progress={45}
          onChange={
            (e) => {
              console.log(e)
            }
          }
        />
        <br />
        <br />
        <Slider 
          dark={dark}
          showTip
          siderHeight={10}
          siderWidth={300}
          progress={80}
          onChange={
            (e) => {
              console.log(e)
            }
          }
        />
      </div>
    )
  }
}
`
const message = `import * as React from "react"
import { Message, Button } from 'Yui'
export default class extends React.Component {
  render() {
    const { dark } = this.props.UI
    const message = new Message({
      duration: 3,
      dark
    })
    return (
      <div className="app-message">
        <Button dark={dark} label='success' style={{width:100}} onClick={
          () => {
            message.success('success!')
          }
        } />
        <br />
        <Button dark={dark} label='error' style={{width:100}}  onClick={
          () => {
            message.error('error!')
          }
        } />
        <br />
        <Button dark={dark} label='warning' style={{width:100}}  onClick={
          () => {
            message.warning('warning!')
          }
        } />
        <br />
        <Button dark={dark} label='normal' style={{width:100}}  onClick={
          () => {
            message.normal('normal!')
          }
        } />
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