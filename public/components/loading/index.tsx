import React from 'react'
import ReactDom from 'react-dom'
import { Loading, Button } from 'Yui'
class Demo extends React.Component {
  state = {
    loading: true
  }
  render() {
    return (
      <div className="app-preview">
        <br />
        <Button style={{ width: 100 }} label={this.state.loading ? "点击完成" : '点击加载'} onClick={
          () => {
            this.setState({
              loading: !this.state.loading
            })
          }
        } />
        <br />
        <Loading
          style={{ height: 120, width: '80%' }}
          loading={this.state.loading}
        >
        </Loading>
        <br />
        <Loading
          style={{ height: 120, width: '80%' }}
          loading={this.state.loading}
          options={{
            background: '#16b4a7',
            iconColor: '#fff'
          }}>
        </Loading>
        <br />
        <Loading
          style={{ height: 120, width: '80%' }}
          loading={this.state.loading}
          options={{
            icon: 'icon-shuaxin'
          }}>
        </Loading>
      </div>
    )
  }
}
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))
