import React from 'react'
import ReactDom from 'react-dom'
import { Pagination} from 'ryui'
class Demo extends React.Component {
  render() {
    return (
      <div className="app-preview">
        <Pagination current={1} pagesize={10} total={80} onChange={
          (e) => {
            console.log(e)
          }
        } />
      </div>
    )
  }
}
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))