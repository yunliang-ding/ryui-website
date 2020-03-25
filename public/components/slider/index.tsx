import React from 'react'
import ReactDom from 'react-dom'
import { Slider} from 'Yui'
class Demo extends React.Component {
  render() {
    const dark = true
    return (
      <div className="app-preview">
        <Slider 
          dark={dark}
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
          dark={dark}
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
          dark={dark}
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