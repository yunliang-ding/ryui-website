import * as React from "react"
import './index.less'
const Window: any = window
class Carousel extends React.Component {
  state: any
  props: {
    dark?: boolean,
    style?: any,
    pages: any,
    currentPage?: any,
    onChange?: any
  }
  constructor(props) {
    super(props)
    this.state = {
      currentPage: props.currentPage
    }
  }
  componentWillReceiveProps(props) {
    this.state.currentPage = props.currentPage
  }
  render() {
    const { style, pages } = this.props
    const dark = this.props.dark || Window.yuiIsDark
    const { currentPage } = this.state
    let theme = dark ? '-dark' : ''
    return <div className={`yui-carousel${theme}`} style={style}>
      <div className='yui-carousel-before' onClick={
        () => {
          this.setState({
            currentPage: this.state.currentPage == 1 ? 1 : this.state.currentPage - 1
          })
        }
      }>
        <i className='iconfont icon-icon-jiantouzuo'></i>
      </div>
      <div className='yui-carousel-next' onClick={
        () => {
          this.setState({
            currentPage: this.state.currentPage === pages.length ? pages.length : this.state.currentPage + 1
          })
        }
      }>
        <i className='iconfont icon-jiantou2'></i>
      </div>
      {
        pages && pages.map((page, index) => {
          return <div className='yui-carousel-page' style={{
            left: (index + 1) === currentPage ? 0 : 100 * ((index+1) - currentPage) + '%'
          }}>
            {
              page
            }
          </div>
        })
      }
      <div className='yui-carousel-legend'>
        <div className='yui-carousel-legend-box'>
          {
            pages && pages.map((page, index) => {
              return <div
                className={(index + 1) === currentPage ? 'yui-carousel-legend-box-item-active' : 'yui-carousel-legend-box-item'}
                onClick={
                  () => {
                    this.setState({
                      currentPage: index + 1
                    }, () => {
                      this.props.onChange && this.props.onChange(index + 1)
                    })
                  }
                }
              />
            })
          }
        </div>
      </div>
    </div>
  }
}
export {
  Carousel
}
