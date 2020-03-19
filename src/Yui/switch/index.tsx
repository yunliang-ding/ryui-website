import * as React from 'react'
import './index.less'
class Switch extends React.Component {
  props: any
  state: any
  constructor(props){
    super()
    this.state = {
      checked: props.checked
    }
  }
  componentWillReceiveProps (props) {
    this.setState({
      checked: props.checked
    })
  }
  render() {
    const {
      disabled
    } = this.props
    const {
      checked
    } = this.state
    let theme = this.props.dark ? '-dark' : ''
    let style = this.props.style || {}
    if(disabled){
      style.opacity = 0.5
      style.cursor = 'not-allowed'
    }
    return <div
      className={checked ? "yui-switch-checked"+theme : "yui-switch"+theme}
      style={style}
      onClick={
        () => {
          if(!disabled){
            this.setState({
              checked: !checked
            }, () => {
              if(this.props.onChange){
                this.props.onChange(!checked)
              }
            })
          }
        }
      }
    >
      <div className={checked ? 'yui-switch-addon-checked' : 'yui-switch-addon'} />
    </div>
  }
}
export {
  Switch
}
