const React = require('react')
const ReactDom = require('react-dom')
const { Loading, Button } = require('Yui')
class Demo extends React.Component {
  state = {
    loading: true
  }
  render() {
    const dark = true
    return (
      <div className="app-preview">
        <br />
        <Button dark={dark} style={{ width: 100 }} label={this.state.loading ? "点击完成": '点击加载'} onClick={
          () => {
            this.setState({
              loading: !this.state.loading
            })
          }
        } />
        <br />
        <Loading dark={dark} style={{ height: 120, width: '80%' }} loading={this.state.loading}>
        </Loading>
        <br />
        <Loading dark={dark} style={{ height: 120, width: '80%' }} loading={this.state.loading} options={{
          background: '#16b4a7',
          iconColor: '#fff'
        }}>
        </Loading>
        <br />
        <Loading dark={dark} style={{ height: 120, width: '80%' }} loading={this.state.loading} options={{
          icon: 'icon-shuaxin'
        }}>
        </Loading>
      </div>
    )
  }
}
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))
