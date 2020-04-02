import React from 'react'
import ReactDom from 'react-dom'
import { Tabs } from 'ryui'
class Demo extends React.Component {
  state: any
  constructor(props) {
    super(props)
    this.state = {
      info: null,
      dataList: [{
        key: 1,
        label: <span>第一个Tab1</span>,
        content: <div>sub-tab1</div>
      }, {
        key: 2,
        label: <span>第二个Tab2</span>,
        content: <div>sub-tab2</div>
      }, {
        key: 3,
        label: <span>第三个Tab3</span>,
        content: <div>sub-tab3</div>
      }],
      value: 3
    }
  }
  render() {
    return (
      <div className="app-preview">
        <Tabs
          style={{ width: 500 }}
          contentStyle={{ height: 300 }}
          dataList={this.state.dataList}
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
        <br />
         <Tabs
          close
          style={{ width: 500 }}
          contentStyle={{ height: 300 }}
          dataList={this.state.dataList}
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
