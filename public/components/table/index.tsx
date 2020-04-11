// @ts-nocheck
import React from 'react'
import ReactDom from 'react-dom'
import { Table, Button, Select } from 'ryui'
class Demo extends React.Component {
  data = [{
    key: Math.random(),
    no: 1,
    application: '用户管理',
    role: 1,
    roleName: '管理员',
    count: 1
  }, {
    key: Math.random(),
    no: 2,
    application: '开发手册',
    role:2,
    roleName: '技术人员',
    count: 2
  }, {
    key: Math.random(),
    no: 3,
    application: '后台录入',
    role:3,
    roleName: '开发人员',
    count: 3
  }, {
    key: Math.random(),
    no: 4,
    application: '前台显示',
    role: 4,
    roleName: '实施运维',
    count: 4
  }]
  state = {
    data: JSON.parse(JSON.stringify(this.data)),
    role: -1
  }
  filterByType = (role) => {
    let data = role === -1 ? this.data : this.data.filter(item => {
      return item.role === role
    })
    this.setState({data, role})
  }
  render() {
    const colmun = [{
      label: '序号',
      dataIndex: 'no',
      render: (value, record) => {
        return <Button style={{ width: 30 }} label={value} />
      }
    }, {
      label: '应用名称',
      dataIndex: 'application'
    }, {
      label: <Select
        style={{
          width: 80,
          height: 30,
          border: 0,
          background: 'inherit',
          marginLeft: -8
        }}
        dataList={[
          {
            label: '全部类型',
            value: -1
          },
          {
            label: '管理员',
            value: 1
          },
          {
            label: '技术人员',
            value: 2
          },
          {
            label: '开发人员',
            value: 3
          },
          {
            label: '实施运维',
            value: 4
          }
        ]}
        value={this.state.role}
        onChange={
          (e) => {
            this.filterByType(e)
          }
        }
      />,
      dataIndex: 'roleName'
    }, {
      label: '子进程数',
      dataIndex: 'count',
      sorter: (a, b) => {
        return a.count > b.count ? 1 : -1
      }
    }, {
      label: '操作',
      dataIndex: 'opeartion',
      render: (value, record) => {
        return ['删除', '修改'].map(m => {
          return <Button style={{ width: 50, marginRight: 10 }} label={m} onClick={
            () => {
              alert('123')
            }
          } />
        })
      }
    }]
    return (
      <div className='app-preview' style={{ justifyContent: 'flex-start' }}>
        <Table
          style={{ height: 400, marginBottom: 40 }}
          data={this.state.data}
          colmun={colmun}
        />
        <Table
          style={{ height: 400, marginBottom: 40 }}
          data={this.state.data}
          colmun={colmun}
          styleHeader={{
            border: '1px solid var(--theme-color)'
          }}
        />
        <Table
          style={{ height: 400, marginBottom: 40 }}
          data={this.state.data}
          colmun={colmun}
          line={true}
        />
        <Table
          style={{ height: 400 }}
          data={this.state.data}
          colmun={colmun}
          colmunSort={true}
        />
      </div>
    )
  }
}
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))