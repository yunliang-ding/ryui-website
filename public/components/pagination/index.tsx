import React from 'react'
import ReactDom from 'react-dom'
import { Pagination } from 'ryui'
class Demo extends React.Component {
  render() {
    return (
      <div className="app-preview">
        <Pagination
          current={3}
          pagesize={10}
          total={60}
          onChange={
            (e) => {
              console.log(e)
            }
          } />
        <br />
        <Pagination
          current={5}
          pagesize={10}
          total={180}
          onChange={
            (e) => {
              console.log(e)
            }
          } />
      </div>
    )
  }
}
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))