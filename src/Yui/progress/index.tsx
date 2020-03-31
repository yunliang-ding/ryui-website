import * as React from 'react'
import './index.less'
const Window:any = window
class Progress extends React.Component {
  state: any
  props: any
  constructor(props){
    super(props)
    this.state = {
      value: props.value
    }
  }
  componentWillReceiveProps(props) {
    this.setState({
      value: props.value
    })
  }
  render() {
    let { value } = this.state
    const theme = this.props.dark || Window.yuiIsDark ? '-dark' : ''
    return (
      <div className={"yui-progress"+theme} style={this.props.style}>
        is-progress
      </div>
    )
  }
}
export {
  Progress
}