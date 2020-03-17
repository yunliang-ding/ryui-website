import * as React from 'react'
import './index.less'
class Pagination extends React.Component {
  state = {
    current: null,
    pagesize: null,
    total: null
  }
  props: any
  componentWillMount() {
    this.setState({
      current: this.props.current,
      pagesize: this.props.pagesize,
      total: this.props.total
    })
  }
  itemClick = (current) => {
    this.setState({
      current
    }, () => {
      if (this.props.onChange) {
        this.props.onChange(current)
      }
    })
  }
  render() {
    let current = this.state.current
    let pagesize = this.state.pagesize
    let totalPage = this.state.total / pagesize + (this.state.total % pagesize > 0 ? 1 : 0)
    let page = [];
    let theme = this.props.dark ? '-dark' : ''
    for (let i = 1; i < totalPage + 1; i++) {
      page.push(
        <div key={Math.random()} className={current == i ? "yui-pagination-item-active" : "yui-pagination-item"}
          onClick={
            () => {
              this.itemClick(i)
            }
          }
        >
          {i}
        </div>
      )
    }
    return (
      <div className={"yui-pagination"+theme}>
        <div className={this.state.current == 1 ? "yui-pagination-pre-disabled" : "yui-pagination-pre"}
          onClick={
            () => {
              if (this.state.current != 1) {
                this.itemClick(this.state.current - 1)
              }
            }
          }
        >
          上一页
        </div>
        {page}
        <div className={this.state.current == totalPage ? "yui-pagination-next-disabled" : "yui-pagination-next"}
          onClick={
            () => {
              if (this.state.current !== totalPage) {
                this.itemClick(this.state.current + 1)
              }
            }
          }
        >
          下一页
        </div>
      </div>
    )
  }
}
export {
  Pagination
}
