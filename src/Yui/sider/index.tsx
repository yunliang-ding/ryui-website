import * as React from 'react'
import './index.less'
const $: any = document.querySelector.bind(document)
class Sider extends React.Component {
  props: any
  state: any
  constructor(props) {
    super(props)
  }
  componentDidMount() {
  }
  render() {
    let theme = this.props.dark ? '-dark' : ''
    return <div className={'yui-sider'+theme}>
      app-sider
    </div>
  }
}
export {
  Sider
}
