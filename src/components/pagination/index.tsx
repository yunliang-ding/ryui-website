import * as React from "react"
import { Pagination } from '../../Yui/index'
import './index.less'
import { observer, inject } from 'mobx-react'
@inject('UI')
@observer
export default class extends React.Component {
  props: any
  render() {
    const { dark } = this.props.UI
    return (
      <div className="app-pagination">
        <Pagination dark={dark} current={1} pagesize={10} total={80} onChange={
          (e) => {
            console.log(e)
          }
        } />
      </div>
    )
  }
}
