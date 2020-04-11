// @ts-nocheck
import React from 'react'
import ReactDom from 'react-dom'
import { Tabs } from 'ryui'
class Demo extends React.Component {
  state: any
  constructor(props) {
    super(props)
    this.state = {
      info: null,
      dataList1: [{
        key: 1,
        label: <span>noContent-Tab1</span>
      }, {
        key: 2,
        label: <span>noContent-Tab2</span>
      }, {
        key: 3,
        label: <span>noContent-Tab3</span>
      }],
      dataList2: [{
        key: 1,
        label: <span>content-Tab1</span>,
        content: <div>sub-tab1</div>
      }, {
        key: 2,
        label: <span>content-Tab2</span>,
        content: <div>sub-tab2</div>
      }, {
        key: 3,
        label: <span>content-Tab3</span>,
        content: <div>sub-tab3</div>
      }],
      value: 3
    }
  }
  render() {
    return (
      <div className="app-preview">
        <Tabs
          style={{
            width: 500,
            height: 40
          }}
          dataList={this.state.dataList1}
          activeKey={1}
          onClick={
            (e) => {
              console.log(e)
            }
          }
        />
        <br />
        <Tabs
          style={{
            width: 500,
            height: 200
          }}
          dataList={this.state.dataList2}
          activeKey={1}
          onClick={
            (e) => {
              console.log(e)
            }
          }
        />
        <br />
        <Tabs
          close
          style={{
            width: 500,
            height: 200
          }}
          dataList={this.state.dataList2}
          activeKey={1}
          onRemove={
            (e) => {
              console.log(e)
            }
          }
          onClick={
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
