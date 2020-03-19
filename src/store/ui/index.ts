import { observable, action } from 'mobx'
const $: any = document.querySelector.bind(document)
class UI{
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
  @observable themeList = [ {
    label: '绿色主题',
    value: 'green'
  },{
    label: '红色主题',
    value: 'red'
  }, {
    label: '紫色主题',
    value: 'pink'
  }, {
    label: '蓝色主题',
    value: 'blue'
  }]
  @action setTheme = (theme: string): void => {
    this.theme = theme
    $('#theme-css').href = `./css/${theme}.css`
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
      label: 'Input　输入框'
    }, {
      key: 'checkBox',
      icon: 'icon-cebianlan',
      label: 'CheckBox　多选框'
    }, {
      key: 'radio',
      icon: 'icon-cebianlan',
      label: 'Radio　单选框'
    },{
      key: 'switch',
      icon: 'icon-cebianlan',
      label: 'Switch　开关'
    }, {
      key: 'select',
      icon: 'icon-cebianlan',
      label: 'Select　下拉选'
    }, {
      key: 'button',
      icon: 'icon-cebianlan',
      label: 'Button　按钮'
    }]
  }, {
    key: '2',
    icon: 'icon-jiaohu',
    label: '交互组件',
    subMenu: [{
      key: 'alert',
      icon: 'icon-cebianlan',
      label: 'Alert　提示'
    }, {
      key: 'loading',
      icon: 'icon-cebianlan',
      label: 'Loading　加载'
    }]
  }, {
    key: '3',
    icon: 'icon--buju',
    label: '导航组件',
    subMenu: [{
      key: 'table',
      icon: 'icon-cebianlan',
      label: 'Table　表格'
    }, {
      key: 'tab',
      icon: 'icon-cebianlan',
      label: 'Tab　选项卡'
    }, {
      key: 'pagination',
      icon: 'icon-cebianlan',
      label: 'Pagination　分页'
    }, {
      key: 'tree',
      icon: 'icon-cebianlan',
      label: 'Tree　树组件'
    }, {
      key: 'nav',
      icon: 'icon-cebianlan',
      label: 'Nav　导航栏'
    }]
  }]
  @action setCollapsed = (collapsed: boolean): void => {
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