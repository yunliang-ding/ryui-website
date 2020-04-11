// @ts-nocheck
import React from 'react'
import ReactDom from 'react-dom'
import { Switch} from 'ryui'
class Demo extends React.Component {
  render() {
    return (
      <div className="app-preview">
        <Switch
          checked
          onChange={
            (e) => {
              console.log(e)
            }
          } 
        />
        <br />
        <Switch
          disabled
          onChange={
            (e) => {
              console.log(e)
            }
          } 
        />
        <br />
        <Switch
          checked
          checkedNode={<span>开</span>}
          unCheckedNode={<span>关</span>}
          onChange={
            (e) => {
              console.log(e)
            }
          } 
        />
        <br />
        <Switch
          checked
          checkedNode={<i className='iconfont icon-duihao'></i>}
          unCheckedNode={<i className='iconfont icon-guanbi'></i>}
          onChange={
            (e) => {
              console.log(e)
            }
          } 
        />
        <br />
        <Switch
          checked
          loading
          onChange={
            (e) => {
              console.log(e)
            }
          } 
        />
        <br />
        <Switch
          loading
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
