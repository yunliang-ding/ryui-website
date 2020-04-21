class DateUtil {
  date: Date
  constructor() {
    this.date = new Date()
  }
  setDate = (date: Date) => {
    this.date = date
  }
  isLeapYear = () => { // 判断是否是闰年
    let year = this.date.getFullYear()
    return ((year % 4) == 0) && ((year % 100) != 0) || ((year % 400) == 0)
  }
  getDateNumberByMonth = (month: number) => { // 获取这个月份的天数
    let day = 30;
    month = month
    switch (month) {
      case 1: day = 31;
      case 3: day = 31;
      case 4: day = 31;
      case 7: day = 31;
      case 8: day = 31;
      case 10: day = 31;
      case 12: day = 31; break;
      case 2: day = this.isLeapYear() ? 29 : 28; break;
    }
    return day
  }
  getCalendar = () => { // 获取该月份的日历
    let month = this.date.getMonth() + 1
    let year = this.date.getFullYear()
    let totalDay = this.getDateNumberByMonth(month) // 该月份总天数
    let frist = `${year}-${month}-1`
    let last = `${year}-${month}-${totalDay}`
    let fristDate = new Date(frist) // 本月第一天
    let lastDate = new Date(last) // 本月最后一天
    let week = fristDate.getDay() // 本月1号是周几
    // 获取这个月1号是周几再决定补几位
    let before = Array.from(new Array(week).keys()).map((item, index) => {
      let date = new Date(fristDate.getTime() - (index + 1) * 24 * 60 * 60 * 1000)
      return {
        date: date.getDate(),
        dateString: date.toLocaleDateString(),
        currentMonth: false,
        current: false
      }
    }).reverse()
    let current = Array.from(new Array(this.getDateNumberByMonth(month)).keys()).map((item, index) => {
      let date = new Date(fristDate.getTime() + index * 24 * 60 * 60 * 1000)
      return {
        date: date.getDate(),
        dateString: date.toLocaleDateString(),
        currentMonth: true,
        current: date.toLocaleDateString() === this.date.toLocaleDateString()
      }
    })
    // 后补齐
    let after = Array.from(new Array(42 - before.length - current.length).keys()).map((item, index) => {
      let date = new Date(lastDate.getTime() + (index + 1) * 24 * 60 * 60 * 1000)
      return {
        date: date.getDate(),
        dateString: date.toLocaleDateString(),
        currentMonth: false,
        current: false
      }
    })
    let calendar = before.concat(current).concat(after)
    return [
      calendar.slice(0, 7),
      calendar.slice(7, 14),
      calendar.slice(14, 21),
      calendar.slice(21, 28),
      calendar.slice(28, 35),
      calendar.slice(35, 42)
    ]
  }
}
const dateUtil = new DateUtil()
export {
  dateUtil
}