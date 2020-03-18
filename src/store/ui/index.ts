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
  @observable dark = true
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
    icon: 'icon-cloud-form',
    label: '基本组件',
    subMenu: [{
      key: 'input',
      icon: 'icon-cebianlan',
      label: 'Input'
    }, {
      key: 'checkBox',
      icon: 'icon-cebianlan',
      label: 'CheckBox'
    }, {
      key: 'radio',
      icon: 'icon-cebianlan',
      label: 'Radio'
    }, {
      key: 'select',
      icon: 'icon-cebianlan',
      label: 'Select'
    }, {
      key: 'button',
      icon: 'icon-cebianlan',
      label: 'Button'
    }]
  }, {
    key: '2',
    icon: 'icon-jiaohu',
    label: '交互组件',
    subMenu: [{
      key: 'alert',
      icon: 'icon-cebianlan',
      label: 'Alert'
    }, {
      key: 'loading',
      icon: 'icon-cebianlan',
      label: 'Loading'
    }]
  }, {
    key: '3',
    icon: 'icon--buju',
    label: '导航组件',
    subMenu: [{
      key: 'table',
      icon: 'icon-cebianlan',
      label: 'Table'
    }, {
      key: 'tab',
      icon: 'icon-cebianlan',
      label: 'Tab'
    }, {
      key: 'pagination',
      icon: 'icon-cebianlan',
      label: 'Pagination'
    }, {
      key: 'tree',
      icon: 'icon-cebianlan',
      label: 'Tree'
    }, {
      key: 'nav',
      icon: 'icon-cebianlan',
      label: 'Nav'
    }]
  }]
  @action setCollapsed = (collapsed:boolean): void =>  {
    this.collapsed = collapsed
  }
  @observable openkey = []
  @action setOpenkey = (openkey) => {
    this.openkey = openkey
  }
  @observable type = 1
  @action setType = (type) => {
    this.type = type
  }
  @observable selectKey = []
  @action setSelectKey = (selectKey) => {
    this.selectKey = selectKey
  }
}
const ui = new UI()
export {
  ui
}