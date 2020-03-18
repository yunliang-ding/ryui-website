import * as React from "react"
import { toJS } from 'mobx'
import './index.less'
import { Nav, Select, Button, Radio } from '../Yui/index'
import { observer, inject } from 'mobx-react'
import { Monaco } from '../monaco/index'
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
    if (['input', 'radio', 'checkbox', 'select', 'button'].indexOf(selectKey) > -1) {
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
      setSelectKey
    } = this.props.UI
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
          <div className='app-layout-header-version'>
            <Select
              dark={dark}
              style={{
                width: 120
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
            <Nav
              dark={dark}
              style={{ width: 200, height: 'calc(100% - 32px)' }}
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
              <Monaco
                path={'input'}
                theme={dark ? 'vs-dark' : 'vs'}
                language={'javascript'}
                value={`import * from react`}
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