import * as React from "react"
import './index.less'
import { Table, Button } from '../../Yui/index'
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
          return <Button type='primary' style={{ width: 50, marginRight: 10 }} label={m} onClick={
            () => {
              alert('123')
            }
          } />
        })
      }
    }]
    return (
      <div className="app-table">
        <div className="app-table-left">
          <Table style={{height: 400, marginBottom: 40}} data={this.state.data} colmun={colmun} />
          <Table style={{height: 400, marginBottom: 40}} data={this.state.data} colmun={colmun} styleHeader={{
            background: 'var(--theme-color)',
            color: '#fff'
          }} />
          <Table style={{height: 400, marginBottom: 40}} data={this.state.data} colmun={colmun} line={true} />
          <Table style={{height: 400}} data={this.state.data} colmun={colmun} colmunSort={true} />
        </div>
        <div className="app-table-right">
          <Table style={{height: 400, marginBottom: 40}} dark data={this.state.data} colmun={colmun} />
          <Table style={{height: 400, marginBottom: 40}} dark data={this.state.data} colmun={colmun} styleHeader={{
            background: '#16b4a7',
            color: '#fff'
          }} />
          <Table style={{height: 400, marginBottom: 40}} dark data={this.state.data} colmun={colmun} line={true} />
          <Table dark data={this.state.data} colmun={colmun} colmunSort={true} />
        </div>
      </div>
    )
  }
}
