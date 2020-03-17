import * as React from "react"
import { Pagination } from '../../Yui/index'
import './index.less'
export default class extends React.Component {
  render() {
    return (
      <div className="app-pagination">
        <div className="app-pagination-left">
          <Pagination current={1} pagesize={10} total={80} onChange={
            (e) => {
              console.log(e)
            }
          } />
        </div>
        <div className="app-pagination-right">
          <Pagination dark current={1} pagesize={10} total={80} onChange={
            (e) => {
              console.log(e)
            }
          } />
        </div>
      </div>
    )
  }
}
