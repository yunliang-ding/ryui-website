const React = require('react')
const ReactDom = require('react-dom')
const { Pagination } = require('Yui')
class Demo extends React.Component {
  render() {
    const dark = true
    return (
      <div className="app-preview">
        <Pagination dark={dark} current={1} pagesize={10} total={80} onChange={
          (e) => {
            console.log(e)
          }
        } />
      </div>
    )
  }
}
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))