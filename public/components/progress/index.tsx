import React from 'react'
import ReactDom from 'react-dom'
import { Progress } from 'ryui'
class Demo extends React.Component {
  render() {
    return (
      <div className="app-preview">
        <Progress
          value={56}
          style={{
            width: 500
          }}
        />
        <br />
        <Progress
          value={49}
          background='#009688'
          style={{
            width: 500
          }}
        />
        <br />
        <Progress
          value={49}
          background='linear-gradient(to right, #e66465, #9198e5)'
          style={{
            height: 4,
            width: 500
          }}
        />
        <br />
        <br />
        <br />
        <div style={{
          width: 500,
          display: 'flex',
          justifyContent: 'space-around'
        }}>
          <Progress
            value={30}
            type='circle'
            style={{
              height: 50,
              width: 50
            }}
          />
          <Progress
            value={60}
            type='circle'
            background='#009688'
            style={{
              height: 100,
              width: 100
            }}
          />
          <Progress
            value={80}
            type='circle'
            background='linear-gradient(to right, #e66465, #9198e5)'
            style={{
              height: 150,
              width: 150
            }}
          />
        </div>
      </div>
    )
  }
}
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))
