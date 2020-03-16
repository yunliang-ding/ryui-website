import * as React from "react"
import './index.less'
class CheckBox extends React.Component {
  props: any;
  render() {
    let { value, dataList } = this.props
    value = value || []
    dataList = dataList || []
    let addonBefore = null
    let addonAfter = null
    let checkbox = null;
    if (this.props.addonBefore) { // 前置按钮
      addonBefore = <span className="yui-checkbox-addonBefore">
        {this.props.addonBefore}
      </span>
    }
    if (this.props.addonAfter) { // 后置按钮
      addonAfter = <span className="yui-checkbox-addonAfter">
        {this.props.addonAfter}
      </span>
    }
    checkbox = <div className="yui-checkbox-compont">
      {
        dataList.map(item => {
          return (
            item.disabled
              ?
              <span className="yui-checkbox-compont-item-disabled" key={item.key}>
                <span className="label">
                  {item.label}
                </span>
                <span className="value"></span>
              </span>
              :
              <span className="yui-checkbox-compont-item" key={item.key}>
                <span className="label">
                  {item.label}
                </span>
                <span className={value.includes(item.value) ? "value-active" : "value"} onClick={
                  () => {
                    if (value.includes(item.value)) {
                      value.splice(value.indexOf(item.value), 1)
                    } else {
                      value.push(item.value)
                    }
                    this.props.onChange(value)
                  }
                }>
                  {
                    value.includes(item.value)
                      ?
                      <span className="value-active-center">
                        <i className="iconfont icon-duihao" style={{ fontSize: 12 }} />
                      </span>
                      :
                      null
                  }
                </span>
              </span>
          )
        })
      }
    </div>
    if (this.props.readonly) {
      checkbox = <div className="yui-checkbox-compont-disabled" style={{ display: 'flex' }}>
        {
          dataList && dataList.map(item => {
            return (
              <span className="yui-checkbox-compont-item" key={item.key}>
                <span className="label">
                  {item.label}
                </span>
                <span className={value.includes(item.value) ? "value-active" : "value"}>
                  {
                    value.includes(item.value)
                      ?
                      <span className="value-active-center">
                        <i className="iconfont icon-duihao" style={{ fontSize: 12 }} />
                      </span>
                      :
                      null
                  }
                </span>
              </span>
            )
          })
        }
      </div>
    }
    return (
      <div className="yui-checkbox" style={{ border: (this.props.addonBefore || this.props.addonAfter) ? '1px solid #f2f2f2' : 0 }}>
        {addonBefore}
        {checkbox}
        {addonAfter}
      </div>
    )
  }
}
export {
  CheckBox
}