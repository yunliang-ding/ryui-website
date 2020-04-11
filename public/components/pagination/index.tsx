// @ts-nocheck
import React from 'react'
import ReactDom from 'react-dom'
import { Pagination } from 'ryui'
class Demo extends React.Component {
  render() {
    return (
      <div className="app-preview">
        <Pagination
          current={3}
          pageSize={10}
          total={60}
          onChange={
            (e) => {
              console.log(e)
            }
          }
        />
        <br />
        <Pagination
          current={8}
          pageSize={10}
          total={180}
          showJumper
          onChange={
            (e) => {
              console.log(e)
            }
          }
        />
        <br />
        <Pagination
          current={5}
          pageSize={10}
          total={60}
          showJumper
          pageSizeOptions={[10,20,30]}
          onPageSizeChange={
            (e) => {
              console.log(e)
            }
          }
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
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))