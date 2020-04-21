import * as React from "react"
import { Input, Button } from '../index'
import { dateUtil } from './util'
import './index.less'
const Window: any = window
class DatePicker extends React.Component {
  state = {
    isOpen: false,
    calendar: dateUtil.getCalendar() // 当前日历
  }
  props: {
    dark?: boolean,
    style?: any,
    value: any,
    placeholder?: string
  }
  constructor(props) {
    super(props)
  }
  renderHeader = () => {
    return ['日', '一', '二', '三', '四', '五', '六'].map(item => {
      return <div className='yui-picker-header-item'>
        {item}
      </div>
    })
  }
  renderContent = () => {
    return this.state.calendar.map((row: any) => {
      return <div className='yui-picker-calendar-row'>
        {
          row.map(col => {
            return <div
              className={
                col.current ? 'yui-picker-calendar-row-col-current' : col.currentMonth ? 'yui-picker-calendar-row-col-current-month' : 'yui-picker-calendar-row-col'
              }
            >
              {col.date}
            </div>
          })
        }
      </div>
    })
  }
  render() {
    const { style, placeholder } = this.props
    const dark = this.props.dark || Window.yuiIsDark
    let theme = dark ? '-dark' : ''
    return <div className={`yui-date-picker${theme}`} style={style}>
      <div className='yui-date-picker-input'>
        <Input placeholder={placeholder} />
      </div>
      {
        this.state.isOpen && <div className='yui-date-picker-layer' />
      }
      <div className='yui-date-picker-body'>
        <div className='yui-date-picker-body-header'>
          {this.renderHeader()}
        </div>
        <div className='yui-date-picker-body-calendar'>
          {this.renderContent()}
        </div>
        <div className='yui-date-picker-body-footer'>
          <Button type='primary' label='确定' style={{ height: 30, width: 60, marginRight: 8 }} />
          <Button label='关闭' style={{ height: 30, width: 60 }} />
        </div>
      </div>
    </div>
  }
}
export {
  DatePicker
}
