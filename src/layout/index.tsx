import * as React from "react"
import './index.less'
class Layout extends React.Component {
  props: any
  render() {
    return (
      <div className="app-layout">
        {this.props.children}
      </div>
    )
  }
}
export {
  Layout
}