import React from 'react'
import ReactDom from 'react-dom'
import { Cascader } from 'Yui'
class Demo extends React.Component {
  dataList = [
    {
      value: '1',
      label: 'label 1',
      children: [
        {
          value: '1-1',
          label: 'label 1-1',
          children: [
            {
              value: '1-1-1',
              label: 'label 1-1-1'
            },
            {
              value: '1-1-2',
              label: 'label 1-1-2'
            }
          ]
        },
        {
          value: '1-2',
          label: 'label 1-2',
          children: [
            {
              value: '1-2-1',
              label: 'label 1-2-1'
            },
            {
              value: '1-2-2',
              label: 'label 1-2-2'
            }
          ]
        }
      ]
    },
    {
      value: '2',
      label: 'label 2',
      children: [
        {
          value: '2-1',
          label: 'label 2-1',
          children: [
            {
              value: '2-1-1',
              label: 'label 2-1-1'
            }
          ]
        }
      ]
    }
  ]
  state = {
    value: ['1', '1-2', '1-2-2']
  }
  render() {
    return (
      <div className="app-preview">
        <Cascader
          placeholder='选择城市'
          style={{ width: 200 }}
          dataList={this.dataList}
        />
        <br />
        <Cascader
          placeholder=''
          style={{ width: 200 }}
          dataList={this.dataList}
          value={this.state.value}
          onChange={
            (value) => {
              this.setState({
                value
              })
            }
          }
        />
        <br />
        <Cascader
          trigger='hover'
          placeholder='trigger-hover'
          style={{ width: 200 }}
          dataList={this.dataList}
        />
      </div>
    )
  }
}
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))