import * as React from "react"
import './index.less'
import { Loading, Button } from '../../Yui/index'
import { observer, inject } from 'mobx-react'
@inject('UI')
@observer
export default class extends React.Component {
  state = {
    loading: true
  }
  props: any
  render() {
    const { dark } = this.props.UI
    return (
      <div className="app-loading">
        <br />
        <Button dark={dark} style={{ width: 100 }} label={this.state.loading ? "点击完成": '点击加载'} onClick={
          () => {
            this.setState({
              loading: !this.state.loading
            })
          }
        } />
        <br />
        <Loading dark={dark} style={{ height: 120, width: '80%' }} loading={this.state.loading}>
        </Loading>
        <br />
        <Loading dark={dark} style={{ height: 120, width: '80%' }} loading={this.state.loading} options={{
          background: '#16b4a7',
          iconColor: '#fff'
        }}>
        </Loading>
        <br />
        <Loading dark={dark} style={{ height: 120, width: '80%' }} loading={this.state.loading} options={{
          icon: 'icon-shuaxin'
        }}>
        </Loading>
      </div>
    )
  }
}
