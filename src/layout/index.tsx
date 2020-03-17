import * as React from "react"
import { toJS } from 'mobx'
import './index.less'
import { Nav, Select, Button, Radio } from '../Yui/index'
import { observer, inject } from 'mobx-react'
@inject('UI')
@observer
class Layout extends React.Component {
  props: any
  render() {
    const {
      dark,
      navList,
      versionList,
      version,
      setVersion,
      themeList,
      theme,
      setTheme,
      menus,
      collapsed,
      setCollapsed,
      darkList,
      setDark,
    } = this.props.UI
    return (
      <div className="app-layout">
        <div className='app-layout-header'>
          <Nav
            dark={dark}
            type={dark ? "normal" : "primary"}
            logo={
              <i className="iconfont icon-UI1" style={{ fontSize: 30, color: 'var(--theme-color)' }} />
            }
            navList={navList} menuClick={
              (nav) => {
                console.log(toJS(nav))
              }
            }
          />
          <div className='app-layout-header-version'>
            <Select
              dark={dark}
              style={{
                width:120
              }}
              dataList={versionList}
              value={version}
              onChange={
                (e) => {
                  setVersion(e)
                }
              }
            />
          </div>
          <div className='app-layout-header-theme'>
            <Select
              dark={dark}
              style={{
                width:120
              }}
              dataList={themeList}
              value={theme}
              onChange={
                (e) => {
                  setTheme(e)
                }
              }
            />
          </div>
        </div>
        <div className='app-layout-body'>
          <div className='app-layout-body-left'>
            <Nav
              dark={dark}
              style={{ width: 200, height: 'calc(100% - 32px)' }}
              model="menu"
              navList={menus}
              menuClick={
                (openkey, selectKey) => {
                  console.log(openkey, selectKey)
                }
              }
              openKey={['1']}
              selectKey={['1-2']}
              collapsed={collapsed}
            />
            <Button
              dark={dark}
              type="normal"
              style={{ width: collapsed ? 40 : 200, height: 32 }}
              label={
                <i className={collapsed ? "iconfont icon-zhankai1" : "iconfont icon-shouqi"} style={{ color: 'var(--theme-color)' }} />
              }
              onClick={() => {
                setCollapsed(!collapsed)
              }}
            />
          </div>
          <div className='app-layout-body-right' style={{
            background: dark ? '#111' : '#fff'
          }}>
            <div className='app-layout-body-theme'>
              <Radio dark={dark} addonBefore='主题' dataList={darkList} value={dark} onChange={
                (e) => {
                  setDark(e)
                }
              } />
            </div>
            <div className='app-layout-body-right-components'>
              {this.props.children}
            </div>
            <div className='app-layout-body-right-ccstudio' style={{
              borderColor: dark ? '#222' : '#dcdcdc'
            }}>
              <i className='iconfont icon-development'></i>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export {
  Layout
}