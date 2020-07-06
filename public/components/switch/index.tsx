// @ts-nocheck
import React from 'react'
import ReactDom from 'react-dom'
import { Switch} from 'react-ryui'
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
          checkedNode={<i className='iconfont icon-shouqi'></i>}
          unCheckedNode={<i className='iconfont icon-zhankai1'></i>}
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
