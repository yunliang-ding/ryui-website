import * as React from "react"
import { Button } from '../../Yui/index'
import './index.less'
export default class extends React.Component {
  render() {
    return (
      <div className="app-button">
        <div className="app-button-left">
          <Button style={{ width: 100, margin: 4 }} label="normal" onClick={() => {
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
          <Button type="disabled" style={{ width: 100, margin: 4 }} label="disabled" onClick={() => {

          }} />
          <Button style={{ width: 100, margin: 4 }} label={
            <i className="iconfont icon-chazhao" />
          } onClick={() => {
            alert('iconfont')
          }} />
          <Button type="primary" style={{ width: 100, margin: 4 }} label={
            <i className="iconfont icon-chazhao" />
          } onClick={() => {
            alert('icon-chuangjian')
          }} />
          <Button type="warm" style={{ width: 100, margin: 4 }} label={
            <i className="iconfont icon-chazhao" />
          } onClick={() => {

          }} />
          <Button type="blue" style={{ width: 100, margin: 4 }} label={
            <i className="iconfont icon-chazhao" />
          } onClick={() => {

          }} />
          <Button type="danger" style={{ width: 100, margin: 4 }} label={
            <i className="iconfont icon-chazhao" />
          } onClick={() => {

          }} />
          <Button type="disabled" style={{ width: 100, margin: 4 }} label={
            <i className="iconfont icon-chazhao" />
          } onClick={() => {

          }} />
        </div>
        <div className="app-button-right">
          <Button dark style={{ width: 100, margin: 4 }} label="normal" onClick={() => {
            alert('normal')
          }} />
          <Button dark style={{ width: 100, margin: 4 }} label={
            <i className="iconfont icon-chazhao" />
          } onClick={() => {
            alert('iconfont')
          }} />
        </div>
      </div>
    )
  }
}
