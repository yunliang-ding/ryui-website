import React from 'react'
import ReactDom from 'react-dom'
import { Table, Button } from 'Yui'
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
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))