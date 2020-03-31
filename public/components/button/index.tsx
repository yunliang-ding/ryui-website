import React from 'react'
import ReactDom from 'react-dom'
import { Button } from 'Yui'
class Demo extends React.Component {
  render() {
    return (
      <div className="app-preview" style={{ flexDirection: 'row' }}>
        <div>
          <Button  style={{ width: 100, margin: 12 }} label="normal" onClick={() => {
            alert('normal')
          }} />
          <Button type="primary" style={{ width: 100, margin: 12 }} label="primary" onClick={() => {
            alert('primary')
          }} />
          <Button type="warm" style={{ width: 100, margin: 12 }} label="warm" onClick={() => {

          }} />
          <Button type="blue" style={{ width: 100, margin: 12 }} label="blue" onClick={() => {

          }} />
          <Button type="danger" style={{ width: 100, margin: 12 }} label="danger" onClick={() => {

          }} />
          <Button  type="disabled" style={{ width: 100, margin: 12 }} label="disabled" onClick={() => {

          }} />
        </div>
        <div>
          <Button  style={{ width: 100, margin: 12 }} label={
            <i className="iconfont icon-fenxiang" />
          } onClick={() => {
            alert('iconfont')
          }} />
          <Button type="primary" style={{ width: 100, margin: 12 }} label={
            <i className="iconfont icon-git" />
          } onClick={() => {
            alert('icon-chuangjian')
          }} />
          <Button type="warm" style={{ width: 100, margin: 12 }} label={
            <i className="iconfont icon-icon_yingyongguanli" />
          } onClick={() => {

          }} />
          <Button type="blue" style={{ width: 100, margin: 12 }} label={
            <i className="iconfont icon-tuichu" />
          } onClick={() => {

          }} />
          <Button type="danger" style={{ width: 100, margin: 12 }} label={
            <i className="iconfont icon-github" />
          } onClick={() => {

          }} />
          <Button  type="disabled" style={{ width: 100, margin: 12 }} label={
            <i className="iconfont icon-chazhao" />
          } onClick={() => {

          }} />
        </div>
      </div>
    )
  }
}
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))