import { observable, action } from 'mobx'
const $: any = document.querySelector.bind(document)
class UI {
  @observable version = 2
  @observable versionList = [{
    label: 'v 1.0.1',
    value: 1
  }, {
    label: 'v 2.0.0',
    value: 2
  }]
  @action setVersion = (version: number): void => {
    this.version = version
  }
  @observable theme = 'blue'
  @observable themeList = [{
    label: '蓝色主题',
    value: 'blue'
  }, {
    label: '绿色主题',
    value: 'green'
  }, {
    label: '红色主题',
    value: 'red'
  }, {
    label: '紫色主题',
    value: 'pink'
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
    disabled: true,
    active: false
  }, {
    key: Math.random(),
    label: '组件中心',
    disabled: true,
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
    }, {
      key: 'switch',
      icon: 'icon-cebianlan',
      label: 'Switch　开关'
    }, {
      key: 'select',
      icon: 'icon-cebianlan',
      label: 'Select　下拉框'
    }, {
      key: 'button',
      icon: 'icon-cebianlan',
      label: 'Button　按钮'
    }, {
      key: 'badge',
      icon: 'icon-cebianlan',
      disabled: true,
      label: 'Badge　角标展示'
    }]
  }, {
    key: '2',
    icon: 'icon-jiaohu',
    label: '交互组件',
    subMenu: [{
      key: 'alert',
      icon: 'icon-cebianlan',
      label: 'Alert　警告提示'
    }, {
      key: 'loading',
      icon: 'icon-cebianlan',
      label: 'Loading　加载'
    }, {
      key: 'message',
      icon: 'icon-cebianlan',
      disabled: true,
      label: 'Message　全局提示'
    }, {
      key: 'modal',
      icon: 'icon-cebianlan',
      disabled: true,
      label: 'Modal　对话框'
    }, {
      key: 'drawer',
      icon: 'icon-cebianlan',
      disabled: true,
      label: 'Drawer　抽屉'
    }, {
      key: 'empty',
      icon: 'icon-cebianlan',
      disabled: true,
      label: 'Empty　空数据展示'
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
      label: 'Tree　树形控件'
    }, {
      key: 'nav',
      icon: 'icon-cebianlan',
      label: 'Nav　导航栏'
    }, {
      key: 'cascader',
      disabled: true,
      icon: 'icon-cebianlan',
      label: 'Cascader　级联选择'
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