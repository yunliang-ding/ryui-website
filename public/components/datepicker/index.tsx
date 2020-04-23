// @ts-nocheck
import React from 'react'
import ReactDom from 'react-dom'
import { DatePicker } from 'ryui'
class Demo extends React.Component {
  render() {
    return (
      <div className="app-preview">
         <DatePicker 
          style={{width:300}} 
          placeholder='选择日期'
          onChanege={
            (e) => {
              console.log(e)
            }
          }
        />
        <br />
        <DatePicker 
          style={{width:300}} 
          placeholder='选择日期'
          value='2020-03-16'
          addonBefore='默认日期'
          onChanege={
            (e) => {
              console.log(e)
            }
          }
        />
        <br />
        <DatePicker 
          style={{width:300}} 
          placeholder='选择日期'
          format='YYYY/MM/DD'
          value='2020/04/22'
          addonAfter={<i className="iconfont icon-weimingmingwenjianjia_rili" />}
          onChanege={
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