import * as React from "react"
import './index.less'
import { observer, inject } from 'mobx-react'
@inject('Monaco')
@observer
class Monaco extends React.Component{
  editor: any
  monacoNode: HTMLElement;
  props: any;
  constructor(props) {
    super(props)
  }
  componentDidUpdate () {
    this.props.Monaco.setTheme(this.props.theme)
    this.props.Monaco.setValue(this.props.value)
  }
  componentDidMount() {
    this.props.Monaco.init(this.monacoNode, {
      language: this.props.language,
      value: this.props.value,
      path: this.props.path,
      theme: this.props.theme
    })
  }
  render() {
    return <div
      className={`app-monaco-editor`}
      ref={(node) => { this.monacoNode = node }}
    />
  }
}
export { Monaco }