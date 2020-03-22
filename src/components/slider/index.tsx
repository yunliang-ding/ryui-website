import * as React from "react"
import { Slider } from '../../Yui/index'
import './index.less'
import { observer, inject } from 'mobx-react'
@inject('UI')
@observer
export default class extends React.Component {
  props: any
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
