import * as React from "react"
import { Button } from '../../Yui/index'
import './index.less'
import { observer, inject } from 'mobx-react'
@inject('UI')
@observer
export default class extends React.Component {
  props: any
  render() {
    const { dark } = this.props.UI
    return (
      <div className="app-button">
        <div style={{ display: 'flex' }}>
          <Button dark={dark} style={{ width: 100, margin: 4 }} label="normal" onClick={() => {
            alert('normal')
          }} />
          <Button type="primary" style={{ width: 100, margin: 4 }} label="primary" onClick={() => {
            alert('primary')
          }} />
          <Button type="warm" style={{ width: 100, margin: 4 }} label="warm" onClick={() => {

          }} />
          <Button type="blue" style={{ width: 100, margin: 4 }} label="blue" onClick={() => {

          }} />
          <Button type="danger" style={{ width: 100, margin: 4 }} label="danger" onClick={() => {

          }} />
          <Button dark={dark} type="disabled" style={{ width: 100, margin: 4 }} label="disabled" onClick={() => {

          }} />
        </div>
        <div style={{ display: 'flex' }}>
          <Button dark={dark} style={{ width: 100, margin: 4 }} label={
            <i className="iconfont icon-fenxiang" />
          } onClick={() => {
            alert('iconfont')
          }} />
          <Button type="primary" style={{ width: 100, margin: 4 }} label={
            <i className="iconfont icon-git" />
          } onClick={() => {
            alert('icon-chuangjian')
          }} />
          <Button type="warm" style={{ width: 100, margin: 4 }} label={
            <i className="iconfont icon-icon_yingyongguanli" />
          } onClick={() => {

          }} />
          <Button type="blue" style={{ width: 100, margin: 4 }} label={
            <i className="iconfont icon-tuichu" />
          } onClick={() => {

          }} />
          <Button type="danger" style={{ width: 100, margin: 4 }} label={
            <i className="iconfont icon-github" />
          } onClick={() => {

          }} />
          <Button dark={dark} type="disabled" style={{ width: 100, margin: 4 }} label={
            <i className="iconfont icon-chazhao" />
          } onClick={() => {

          }} />
        </div>
      </div>
    )
  }
}
