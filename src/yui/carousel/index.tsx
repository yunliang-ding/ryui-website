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
    onChange?: any,
    autoplay?: boolean
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
  setCurrentPage = (page) => {
    let currentPage = 1 
    if(page < 1){
      currentPage = this.props.pages.length
    } else if(page > this.props.pages.length) {
      currentPage = 1
    } else {
      currentPage = page
    }
    this.setState({
      currentPage
    }, () => {
      this.props.onChange && this.props.onChange(currentPage)
    })
  }
  autoplay = () => {
    setTimeout(() => {
      this.setCurrentPage(this.state.currentPage + 1)
      this.autoplay()
    }, 3000)
  }
  componentDidMount() {
    if(this.props.autoplay){
      this.autoplay()
    }
  }
  render() {
    const { style, pages } = this.props
    const dark = this.props.dark || Window.yuiIsDark
    const { currentPage } = this.state
    let theme = dark ? '-dark' : ''
    return <div className={`yui-carousel${theme}`} style={style}>
      <div className='yui-carousel-before' onClick={
        () => {
          this.setCurrentPage(this.state.currentPage - 1)
        }
      }>
        <i className='iconfont icon-icon-jiantouzuo'></i>
      </div>
      <div className='yui-carousel-next' onClick={
        () => {
          this.setCurrentPage(this.state.currentPage + 1)
        }
      }>
        <i className='iconfont icon-jiantou2'></i>
      </div>
      {
        pages && pages.map((page, index) => {
          return <div className='yui-carousel-page' style={{
            left: (index + 1) === currentPage ? 0 : 100 * ((index + 1) - currentPage) + '%'
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
                    this.setCurrentPage(index + 1)
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
