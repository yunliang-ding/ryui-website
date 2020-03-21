import * as React from "react"
import { toJS } from 'mobx'
import './index.less'
import { Nav, Select, Button, Radio, Tab } from '../Yui/index'
import { observer, inject } from 'mobx-react'
import { Monaco } from '../monaco/index'
import code from './code'
@inject('UI')
@observer
class Layout extends React.Component {
  props: any
  componentDidMount() {
    const {
      setOpenkey,
      setSelectKey
    } = this.props.UI
    let selectKey = location.hash.substring(2)
    let openKey = ''
    if (['input', 'radio', 'switch', 'checkBox', 'select', 'button', 'sider', 'tooltip'].indexOf(selectKey) > -1) {
      openKey = '1'
    } else if (['alert', 'loading'].indexOf(selectKey) > -1) {
      openKey = '2'
    } else if (['table', 'tab', 'pagination', 'nav', 'tree'].indexOf(selectKey) > -1) {
      openKey = '3'
    }
    setOpenkey([openKey])
    setSelectKey([selectKey])
  }
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
      openkey,
      setOpenkey,
      selectKey,
      setSelectKey,
      type,
      setType
    } = this.props.UI
    console.log(toJS(selectKey))
    return (
      <div className="app-layout" style={{
        background: dark ? '#1e1e1e' : '#fff'
      }}>
        <div className='app-layout-header'>
          <Nav
            dark={dark}
            type={dark ? "normal" : "primary"}
            logo={
              <div>
                <span style={{ fontSize: 18, color: 'var(--theme-color)', marginRight: 8, cursor: 'pointer' }}>Yui</span>
                <i className="iconfont icon-UI1" style={{ fontSize: 30, color: 'var(--theme-color)' }} />
              </div>
            }
            navList={navList} menuClick={
              (nav) => {
                console.log(toJS(nav))
              }
            }
          />
          <div className='app-layout-header-theme'>
            <Select
              dark={dark}
              style={{
                width: 120
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
          <div className='app-layout-body-left' style={{
            width: collapsed ? 40 : 200
          }}>
            <Select
              dark={dark}
              style={{
                width: 200,
                height: 32,
                border: 0
              }}
              dataList={versionList}
              value={version}
              onChange={
                (e) => {
                  setVersion(e)
                }
              }
            />
            <Nav
              dark={dark}
              style={{ width: 200, height: 'calc(100% - 64px)'}}
              model="menu"
              navList={menus}
              menuClick={
                (openkey, selectKey) => {
                  console.log(toJS(openkey))
                  setOpenkey(toJS(openkey))
                  setSelectKey(toJS(selectKey))
                  window.location.hash = selectKey[0]
                }
              }
              openKey={openkey}
              selectKey={selectKey}
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
            background: dark ? '#1a1a1a' : '#fff',
            width: collapsed ? 'calc(100% - 40px)' : 'calc(100% - 200px)'
          }}>
            <div className='app-layout-body-right-ccstudio' style={{
              borderColor: dark ? '#222' : '#dcdcdc'
            }}>
              <div className='app-layout-body-run'>
                <Button dark={dark} style={{ width: 60, margin: 4 }} label="重置" onClick={() => {
                }} />
                <Button dark={dark} type="primary" style={{ width: 60, margin: 4 }} label="运行" onClick={() => {
                }} />
              </div>
              <Monaco
                path={'input'}
                theme={dark ? 'vs-dark' : 'vs'}
                language={'javascript'}
                value={code[selectKey] || ''}
              />
            </div>
            <div className='app-layout-body-right-components'>
              {this.props.children}
              <div className='app-layout-body-theme'>
                <Radio dark={dark} addonBefore='主题' dataList={darkList} value={dark} onChange={
                  (e) => {
                    setDark(e)
                  }
                } />
              </div>
              <div className='app-layout-body-type'>
                <Tab
                  dark={dark}
                  style={{ width: 180, height: 36 }}
                  data={[{
                    key: 1,
                    icon: 'icon-view-1',
                    color: 'var(--theme-color)',
                    label: '预览'
                  }, {
                    key: 2,
                    icon: 'icon-hezi',
                    color: 'var(--theme-color)',
                    label: '属性'
                  }]}
                  value={type}
                  onClick={
                    (e) => {
                      setType(e.key)
                    }
                  }
                />
              </div>
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