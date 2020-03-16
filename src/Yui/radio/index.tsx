import * as React from 'react'
import './index.less'
class Radio extends React.Component {
  props: any
  render() {
    let { value, dataList } = this.props
    value = value || ''
    dataList = dataList || []
    let addonBefore = null
    let addonAfter = null
    let radio = null;
    const theme = this.props.dark ? '-dark' : ''
    if (this.props.addonBefore) { // 前置按钮
      addonBefore = <span className={"ain-radio-addonBefore"+theme}>
        {this.props.addonBefore}
      </span>
    }
    if (this.props.addonAfter) { // 后置按钮
      addonAfter = <span className={"ain-radio-addonAfter"+theme}>
        {this.props.addonAfter}
      </span>
    }
    radio = <div className={"ain-radio-compont"+theme}>
      {
        dataList.map(item => {
          return (
            item.disabled
              ?
              <span className={"ain-radio-compont-item-disabled"+theme} key={item.key}>
                <span className="label">
                  {item.label}
                </span>
                <span className="value"></span>
              </span>
              :
              (
                item.value == value
                  ?
                  <span className={"ain-radio-compont-item"+theme} key={item.key}>
                    <span className="label">
                      {item.label}
                    </span>
                    <span className="value-active">
                      <span className="value-active-center"></span>
                    </span>
                  </span>
                  :
                  <span className={"ain-radio-compont-item"+theme} key={item.key} onClick={
                    () => {
                      this.props.onChange(item.value)
                    }
                  }>
                    <span className="label">
                      {item.label}
                    </span>
                    <span className="value" ></span>
                  </span>
              )
          )
        })
      }
    </div>
    if (this.props.readonly) {
      radio = <div className={"ain-radio-compont-disabled"+theme} style={{ display: 'flex' }}>
        {
          dataList && dataList.map(item => {
            return (
              item.value == value
                ?
                <span className={"ain-radio-compont-item"+theme} key={item.key}>
                  <span className="label">
                    {item.label}
                  </span>
                  <span className="value-active">
                    <span className="value-active-center"></span>
                  </span>
                </span>
                :
                <span className={"ain-radio-compont-item"+theme} key={item.key}>
                  <span className="label">
                    {item.label}
                  </span>
                  <span className="value"></span>
                </span>
            )
          })
        }
      </div>
    }
    return (
      <div className={"ain-radio"+theme} style={{ border: (this.props.addonBefore || this.props.addonAfter) ? (theme ? '1px solid #333' : '1px solid #f2f2f2') : 0 }}>
        {addonBefore}
        {radio}
        {addonAfter}
      </div>
    )
  }
}
export {
  Radio
}