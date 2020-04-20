import * as React from "react"
import './index.less'
const Window: any = window
class Carousel extends React.Component {
  props: {
    dark?:boolean,
    style?:any,
    dataList:any
  }
  constructor(props) {
    super(props)
  }
  render() {
    const { style, dataList } = this.props
    const dark = this.props.dark || Window.yuiIsDark
    let theme = dark ? '-dark' : ''
    return <div className={`yui-carousel${theme}`} style={style}>
      {
        dataList.map(item => {
          return <div>yui</div>
        })
      }
    </div>
  }
}
export {
  Carousel
}
