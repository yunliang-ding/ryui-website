import React from 'react'
import ReactDom from 'react-dom'
import { Switch} from 'Yui'
class Demo extends React.Component {
  render() {
    const dark = true
    return (
      <div className="app-preview">
        <Switch
          dark={dark}
          checked
          onChange={
            (e) => {
              console.log(e)
            }
          } 
        />
        <br />
        <Switch
          dark={dark}
          disabled
          onChange={
            (e) => {
              console.log(e)
            }
          } 
        />
        <br />
        <Switch
          dark={dark}
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
          dark={dark}
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
          dark={dark}
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
          dark={dark}
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
