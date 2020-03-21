import * as React from "react"
import { Sider } from '../../Yui/index'
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
        <Sider dark={dark} />
      </div>
    )
  }
}
