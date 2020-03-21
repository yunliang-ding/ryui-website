import * as React from "react"
import { Tooltip, Button } from '../../Yui/index'
import './index.less'
import { observer, inject } from 'mobx-react'
@inject('UI')
@observer
export default class extends React.Component {
  props: any
  render() {
    const { dark } = this.props.UI
    return (
      <div className="app-tooltip">
        <div style={{marginBottom: 20}}>
          <Tooltip
            title={<span>音乐不是我的全部</span>}
            trigger='hover'
            placement='right'
          >
            <Button dark={dark} style={{ width: 100 }}  label="Right" />
          </Tooltip>
        </div>
        <div style={{marginBottom: 50}}>
          <Tooltip
            title={<span>音乐不是我的全部</span>}
            trigger='hover'
            placement='left'
          >
            <Button dark={dark} style={{ width: 100 }}  label="Left" />
          </Tooltip>
        </div>
        <div style={{marginBottom: 20}}>
          <Tooltip
            title={<span>音乐不是我的全部</span>}
            trigger='hover'
            placement='top'
          >
            <Button dark={dark} style={{ width: 100 }}  label="Top" />
          </Tooltip>
        </div>
         <div style={{marginBottom: 20}}>
          <Tooltip
            title={<span>音乐不是我的全部</span>}
            trigger='hover'
            placement='bottom'
          >
            <Button dark={dark} style={{ width: 100 }}  label="Bottom" />
          </Tooltip>
        </div>
      </div>
    )
  }
}