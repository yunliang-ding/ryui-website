import * as React from "react"
import './index.less'
import { Loading, Button } from '../../Yui/index'
export default class extends React.Component {
  state = {
    loading: true
  }
  render() {
    return (
      <div className="app-loading">
        <div className="app-loading-left">
          <br />
          <Button style={{ width: 100 }} label="点击加载" onClick={
            () => {
              this.setState({
                loading: !this.state.loading
              })
            }
          } />
          <br />
          <Loading style={{height: 120, width: '80%'}} loading={this.state.loading}>
          </Loading>
          <br />
          <Loading style={{height: 120, width: '80%'}} loading={this.state.loading} options={{
            background: '#16b4a7',
            iconColor: '#fff'
          }}>
          </Loading>
          <br />
          <Loading style={{height: 120, width: '80%'}} loading={this.state.loading} options={{
            icon: 'icon-shuaxin'
          }}>
          </Loading>
        </div>
        <div className="app-loading-right">
          <br />
          <Button dark style={{ width: 100 }} label="点击加载" onClick={
            () => {
              this.setState({
                loading: !this.state.loading
              })
            }
          } />
          <br />
          <Loading dark style={{height: 120, width: '80%'}} loading={this.state.loading}>
          </Loading>
          <br />
          <Loading dark style={{height: 120, width: '80%'}} loading={this.state.loading} options={{
            iconColor: '#111'
          }}>
          </Loading>
          <br />
          <Loading dark style={{height: 120, width: '80%'}} loading={this.state.loading} options={{
            icon: 'icon-shuaxin'
          }}>
          </Loading>
        </div>
      </div>
    )
  }
}
