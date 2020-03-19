import * as React from "react"
import { Switch } from '../../Yui/index'
import './index.less'
import { observer, inject } from 'mobx-react'
@inject('UI')
@observer
export default class extends React.Component {
  props: any
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