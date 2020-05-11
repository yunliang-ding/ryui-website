import { observable, action } from 'mobx'
const $: any = document.querySelector.bind(document)
const Window:any = window
Window.yuiIsDark = true
class UI {
  @observable version = 1
  @observable versionList = [{
    label: '1.0',
    value: 1
  }, {
    label: '2.0',
    disabled:true,
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
    Window.yuiIsDark = dark
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
    label: '图表组件',
    disabled: true,
    active: false
  }]
  @observable collapsed = false
  @observable menus = [{
    key: '1',
    icon: 'iconfont icon-cloud-form',
    label: '基本组件',
    subMenu: [{
      key: 'input',
      icon: 'iconfont icon-menu',
      label: 'Input　输入框'
    }, {
      key: 'checkbox',
      icon: 'iconfont icon-menu',
      label: 'CheckBox　多选框'
    }, {
      key: 'radio',
      icon: 'iconfont icon-menu',
      label: 'Radio　单选框'
    }, {
      key: 'select',
      icon: 'iconfont icon-menu',
      label: 'Select　下拉框'
    }, {
      key: 'button',
      icon: 'iconfont icon-menu',
      label: 'Button　按钮'
    }, {
      key: 'badge',
      icon: 'iconfont icon-menu',
      label: 'Badge　角标'
    }, {
      key: 'Switch',
      icon: 'iconfont icon-menu',
      label: 'Switch　开关'
    }, {
      key: 'tooltip',
      icon: 'iconfont icon-menu',
      label: 'Tooltip　提示信息'
    }, {
      key: 'popover',
      icon: 'iconfont icon-menu',
      label: 'Popover 气泡卡片'
    }, {
      key: 'slider',
      icon: 'iconfont icon-menu',
      label: 'Slider　滑动条'
    }, {
      key: 'cascader',
      icon: 'iconfont icon-menu',
      label: 'Cascader　级联选择'
    }]
  }, {
    key: '2',
    icon: 'iconfont icon-jiaohu',
    label: '交互组件',
    subMenu: [{
      key: 'alert',
      icon: 'iconfont icon-menu',
      label: 'Alert　警告提示'
    }, {
      key: 'loading',
      icon: 'iconfont icon-menu',
      label: 'Loading　加载'
    }, {
      key: 'message',
      icon: 'iconfont icon-menu',
      label: 'Message　全局提示'
    }, {
      key: 'modal',
      icon: 'iconfont icon-menu',
      label: 'Modal　对话框'
    }, {
      key: 'drawer',
      icon: 'iconfont icon-menu',
      label: 'Drawer　抽屉'
    }, {
      key: 'progress',
      icon: 'iconfont icon-menu',
      label: 'Progress　进度条'
    }, {
      key: 'steps',
      icon: 'iconfont icon-menu',
      label: 'Steps　步骤条'
    }, {
      key: 'carousel',
      icon: 'iconfont icon-menu',
      label: 'Carousel　轮播'
    }, {
      key: 'datepicker',
      icon: 'iconfont icon-menu',
      label: 'DatePicker　日期'
    }]
  }, {
    key: '3',
    icon: 'iconfont icon--buju',
    label: '导航组件',
    subMenu: [{
      key: 'table',
      icon: 'iconfont icon-menu',
      label: 'Table　表格'
    }, {
      key: 'tab',
      icon: 'iconfont icon-menu',
      label: 'Tab　选项卡'
    }, {
      key: 'pagination',
      icon: 'iconfont icon-menu',
      label: 'Pagination　分页'
    }, {
      key: 'tree',
      icon: 'iconfont icon-menu',
      label: 'Tree　树形控件'
    }, {
      key: 'nav',
      icon: 'iconfont icon-menu',
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