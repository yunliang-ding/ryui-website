// @ts-nocheck
import React from 'react'
import ReactDom from 'react-dom'
import { Slider} from 'react-ryui'
class Demo extends React.Component {
  render() {
    return (
      <div className="app-preview">
        <Slider 
          siderWidth={300}
          progress={20}
          onChange={
            (e) => {
              console.log(e)
            }
          }
        />
        <br />
        <br />
        <Slider 
          siderWidth={300}
          siderHeight={12}
          progress={45}
          onChange={
            (e) => {
              console.log(e)
            }
          }
        />
        <br />
        <br />
        <Slider 
          showTip
          siderHeight={10}
          siderWidth={300}
          progress={80}
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