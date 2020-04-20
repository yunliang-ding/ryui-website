import * as React from "react"
import './index.less'
const Window: any = window
class DatePicker extends React.Component {
  props: {
    dark?:boolean,
    style?:any,
    value:any
  }
  constructor(props) {
    super(props)
  }
  render() {
    const { style } = this.props
    const dark = this.props.dark || Window.yuiIsDark
    let theme = dark ? '-dark' : ''
    return <div className={`yui-date-picker${theme}`} style={style}>
      yui-date-picker
    </div>
  }
}
export {
  DatePicker
}
