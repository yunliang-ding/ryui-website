import React from 'react'
import ReactDom from 'react-dom'
import { Loading, Button } from 'ryui'
class Demo extends React.Component {
  state = {
    loading: true
  }
  render() {
    return (
      <div className="app-preview">
        <br />
        <Button
          style={{ width: 100 }}
          label={this.state.loading ? "点击完成" : '点击加载'}
          onClick={
            () => {
              this.setState({
                loading: !this.state.loading
              })
            }
          }
        />
        <br />
        <Loading
          style={{ height: 120, width: '80%' }}
          loading={this.state.loading}
        />
        <br />
        <Loading
          style={{ height: 120, width: '80%' }}
          loading={this.state.loading}
          iconStyle={{
            color: '#16b4a7'
          }}
        >
          <span>测试数据</span>
        </Loading>
        <br />
        <Loading
          style={{ height: 120, width: '80%' }}
          loading={this.state.loading}
          icon='icon-loading6'
        />
      </div>
    )
  }
}
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))
