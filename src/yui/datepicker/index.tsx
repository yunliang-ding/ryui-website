import * as React from "react"
import { Input, Button } from '../index'
import { DateUtil } from './util'
import './index.less'
const Window: any = window
class DatePicker extends React.Component {
  dateUtil:DateUtil;
  state:any;
  props: {
    dark?: boolean,
    style?: any,
    value: any,
    placeholder?: string
  }
  constructor(props) {
    super(props)
    this.dateUtil = new DateUtil(new Date())
    this.state = {
      isOpen: false,
      calendar: this.dateUtil.getCalendar() // 当前日历
    }
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
  setCalendar = (time) => {
    this.dateUtil.setDate(
      new Date(time)
    )
    this.setState({
      calendar: this.dateUtil.getCalendar()
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
        <div className='yui-date-picker-body-tools'>
          <div className='picker-tools-before' onClick={
            () => {
              this.setCalendar(this.dateUtil.date.getTime() - (this.dateUtil.isLeapYear() ? 366 : 355) * 24 * 60 * 60 * 1000)
            }
          }>
            <i className='iconfont icon-next'></i>
          </div>
          <div className='picker-tools-before picker-tools-before-month' onClick={
            () => {
              this.setCalendar(this.dateUtil.date.getTime() - this.dateUtil.getDateNumberByMonth(this.dateUtil.date.getMonth() + 1) * 24 * 60 * 60 * 1000)
            }
          }>
            <i className='iconfont icon-icon-jiantouzuo'></i>
          </div>
          <div className='picker-tools-date'>{this.dateUtil.date.getFullYear()}年{this.dateUtil.date.getMonth() + 1}月</div>
          <div className='picker-tools-next picker-tools-next-month' onClick={
            () => {
              this.setCalendar(this.dateUtil.date.getTime() + this.dateUtil.getDateNumberByMonth(this.dateUtil.date.getMonth() + 1) * 24 * 60 * 60 * 1000)
            }
          }>
            <i className='iconfont icon-jiantou2'></i>
          </div>
          <div className='picker-tools-next' onClick={
            () => {
              this.setCalendar(this.dateUtil.date.getTime() + (this.dateUtil.isLeapYear() ? 366 : 355) * 24 * 60 * 60 * 1000)
            }
          }>
            <i className='iconfont icon-next'></i>
          </div>
        </div>
        <div className='yui-date-picker-body-header'>
          {this.renderHeader()}
        </div>
        <div className='yui-date-picker-body-calendar'>
          {this.renderContent()}
        </div>
        <div className='yui-date-picker-body-footer'>
          <Button type='primary' label='今天' style={{ height: 30, width: 60 }} />
        </div>
      </div>
    </div>
  }
}
export {
  DatePicker
}
