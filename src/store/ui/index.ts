import { observable, action } from 'mobx'
class UI {
  @observable version = 2
  @observable versionList = [{
    label: '版本1.0',
    value: 1
  }, {
    label: '版本2.0',
    value: 2
  }]
  @action setVersion = (version: number): void => {
    this.version = version
  }
  @observable theme = 'green'
  @observable themeList = [{
    label: '红色主题',
    value: 'red'
  }, {
    label: '绿色主题',
    value: 'green'
  }]
  @action setTheme = (theme: string): void => {
    this.theme = theme
  }
  @observable dark = false
  @observable darkList = [{
    label: '黑色',
    value: true
  }, {
    label: '白色',
    value: false
  }]
  @action setDark = (dark: boolean): void => {
    this.dark = dark
  }
  @observable navList = [{
    key: Math.random(),
    label: '常用组件',
    active: true
  }, {
    key: Math.random(),
    label: '移动H5组件',
    active: false
  }, {
    key: Math.random(),
    label: '组件中心',
    active: false
  }]
  @observable collapsed = false
  @observable menus = [{
    key: '1',
    icon: 'icon-github',
    label: '个人中心',
    subMenu: [{
      key: '1-2',
      icon: 'icon-fenxiang',
      label: '我的信息'
    }, {
      key: '1-3',
      icon: 'icon-tuichu',
      label: '我的提交',
    }]
  }, {
    key: '2',
    icon: 'icon-icon_yingyongguanli',
    label: '信息管理'
  }]
  @action setCollapsed = (collapsed:boolean): void =>  {
    this.collapsed = collapsed
  }
}
const ui = new UI()
export {
  ui
}