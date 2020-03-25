import React from 'react'
import ReactDom from 'react-dom'
import { Pagination} from 'Yui'
class Demo extends React.Component {
  render() {
    const dark = true
    return (
      <div className="app-preview">
        <Pagination dark={dark} current={1} pagesize={10} total={80} onChange={
          (e) => {
            console.log(e)
          }
        } />
      </div>
    )
  }
}
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))