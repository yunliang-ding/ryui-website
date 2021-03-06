import * as React from "react"
import { toJS } from 'mobx'
import './index.less'
import { Nav, Select, Button, Tabs, Tooltip, Switch } from 'react-ryui'
import { observer, inject } from 'mobx-react'
import { Monaco } from '../monaco'
import SplitPane from 'react-split-pane'
const code = require('../../public/components/index.ts').default
@inject('UI', 'Monaco', 'Compile')
@observer
class Layout extends React.Component {
  props: any
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const {
      setOpenkey,
      setSelectKey
    } = this.props.UI
    let selectKey = location.hash.substring(2)
    let openKey = ''
    if (['input', 'radio', 'Switch', 'badge', 'checkbox', 'select', 'button', 'slider', 'tooltip', 'cascader', 'popover'].indexOf(selectKey) > -1) {
      openKey = '1'
    } else if (['alert', 'loading', 'message', 'progress', 'drawer', 'modal', 'steps', 'carousel', 'datepicker'].indexOf(selectKey) > -1) {
      openKey = '2'
    } else if (['table', 'tab', 'pagination', 'nav', 'tree'].indexOf(selectKey) > -1) {
      openKey = '3'
    }
    setOpenkey([openKey])
    setSelectKey([selectKey])
    this.props.Compile.setCode(code[selectKey])
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
      setDark,
      openkey,
      setOpenkey,
      selectKey,
      setSelectKey,
      type,
      setType
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
                <span style={{ fontSize: 18, color: 'var(--theme-color)', marginRight: 8, cursor: 'pointer' }}>RYUI</span>
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
                width: 90,
                height: 30,
                border: 0,
                background: 'inherit'
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
          <div className='app-layout-header-model'>
            <Tooltip
              dark={dark}
              title={<span>切换会重制代码</span>}
              placement='left'
            >
              <Switch
                style={{ width: 50 }}
                checked={dark}
                checkedNode={<span>黑色</span>}
                unCheckedNode={<span>白色</span>}
                onChange={
                  (e) => {
                    this.props.Compile.setCode(this.props.Monaco.editorMonaco.getValue())
                    setDark(e)
                  }
                }
              />
            </Tooltip>
          </div>
        </div>
        <div className='app-layout-body'>
          <div className='app-layout-body-left' style={{
            width: collapsed ? 45 : 200
          }}>
            <Select
              dark={dark}
              style={{
                width: collapsed ? 45 : 200,
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
              style={{ width: 200, height: 'calc(100% - 64px)' }}
              model="menu"
              navList={menus}
              collapsedWidth={45}
              menuClick={
                (openkey, selectKey) => {
                  setOpenkey(toJS(openkey))
                  setSelectKey(toJS(selectKey))
                  window.location.hash = `/${selectKey[0]}`
                  this.props.Compile.setCode(code[selectKey])
                }
              }
              openKey={openkey}
              selectKey={selectKey}
              collapsed={collapsed}
            />
            <Button
              dark={dark}
              type="normal"
              style={{ width: collapsed ? 45 : 200, height: 32 }}
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
            width: collapsed ? 'calc(100% - 45px)' : 'calc(100% - 200px)'
          }}>
            <SplitPane
              split="vertical"
              step={10}
              defaultSize='45%'
              minSize={0}
              maxSize='100%'
              onDragStarted={() => (document.body.style.cursor = 'col-resize')}
              onDragFinished={
                () => {
                  document.body.style.cursor = 'auto'
                }
              }
            >
              <div className='app-layout-body-right-ccstudio' style={{
                borderColor: dark ? '#222' : '#dcdcdc'
              }}>
                <div className='app-layout-body-run'>
                  <Tooltip
                    dark={dark}
                    title={<span>重制之后会立即运行代码</span>}
                    placement='bottom'
                  >
                    <Button dark={dark} style={{ width: 60, margin: '0 4px' }} label="重置" onClick={() => {
                      this.props.Monaco.editorMonaco.setValue(code[selectKey])
                      this.props.Compile.setCode(code[selectKey])
                    }} />
                  </Tooltip>
                  <Tooltip
                    dark={dark}
                    title={<span>运行异常控制台会有错误信息</span>}
                    placement='bottom'
                  >
                    <Button dark={dark} type="primary" style={{ width: 60, margin: '0 4px' }} label="运行" onClick={() => {
                      this.props.Compile.setCode(this.props.Monaco.editorMonaco.getValue())
                    }} />
                  </Tooltip>
                </div>
                <Monaco
                  path={'input'}
                  theme={dark ? 'vs-dark' : 'vs'}
                  language={'javascript'}
                  value={code[selectKey] || ""}
                />
              </div>
              <div className='app-layout-body-right-components'>
                <div id='codeWapper' />
                <pre id='error-message' style={{
                  background: dark ? '#1b1b1b' : '#fff',
                }} />
                <div className='app-layout-body-type'>
                  <Tabs
                    dark={dark}
                    dataList={[{
                      key: 1,
                      label: [<i className='iconfont icon-view-1' style={{
                        color: 'var(--theme-color)',
                        marginRight: 8
                      }}></i>, '预览']
                    }, {
                      key: 2,
                      label: [<i className='iconfont icon-hezi' style={{
                        color: 'var(--theme-color)',
                        marginRight: 8
                      }}></i>, '属性']
                    }]}
                    activeKey={type}
                    onClick={
                      (e) => {
                        setType(e.key)
                      }
                    }
                  />
                </div>
              </div>
            </SplitPane>
          </div>
        </div>
      </div>
    )
  }
}
export {
  Layout
}