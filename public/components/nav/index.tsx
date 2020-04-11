// @ts-nocheck
import React from 'react'
import ReactDom from 'react-dom'
import { Nav, Select, Button } from 'ryui'
class Demo extends React.Component {
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
    let {navList} = this.state
    return <div className="app-preview">
      <Nav logo={
        <i className="iconfont icon-UI1" style={{ fontSize: 30, color: 'var(--theme-color)' }} />
      }
        navList={navList} menuClick={
          (nav) => {
            console.log(nav)
          }
        }
      />
      <br />
      <Nav logo={
        <i className="iconfont icon-UI1" style={{ fontSize: 30, color: 'var(--theme-color)' }} />
      }
        type="right"
        navList={navList} menuClick={
          (nav) => {
            console.log(nav)
          }
        }
      />
      <br />
      <Button
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
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))
