// @ts-nocheck
import React from 'react'
import ReactDom from 'react-dom'
import { Steps } from 'ryui'
class Demo extends React.Component {
  render() {
    return (
      <div className="app-preview">
        <Steps
          stepList={[{
            icon: <i className='iconfont icon-message_SendSuccessfully'></i>,
            title: 'step1',
            subTitle: 'subTitle1',
            description: 'description1'
          }, {
            icon: <i className='iconfont icon-message_SendSuccessfully'></i>,
            title: 'step2',
            subTitle: 'subTitle2',
            description: 'description2'
          }, {
            icon: <i className='iconfont icon-message_SendSuccessfully'></i>,
            title: 'step3',
            subTitle: 'subTitle3',
            description: 'description3'
          }]}
          current={1}
          onChange={
            (e) => {
              console.log(e)
            }
          }
        />
        <br />
        <br />
        <Steps
          stepList={[{
            icon: <i className='iconfont icon-message_SendSuccessfully'></i>,
            title: 'step1',
            subTitle: 'subTitle1',
            description: 'description1'
          }, {
            icon: <i className='iconfont icon-loading'></i>,
            title: 'step2',
            subTitle: 'subTitle2',
            description: 'description2'
          }, {
            icon: <i className='iconfont icon-message_SendSuccessfully'></i>,
            title: 'step3',
            subTitle: 'subTitle3',
            description: 'description3'
          }]}
          current={2}
          onChange={
            (e) => {
              console.log(e)
            }
          }
        />
        <br />
        <br />
        <Steps
          style={{ width: 200, height: 320 }}
          direction='vertical'
          stepList={[{
            icon: <i className='iconfont icon-message_SendSuccessfully'></i>,
            title: 'step1',
            subTitle: 'subTitle1',
            description: 'description1'
          }, {
            icon: <i style={{color: 'red'}} className='iconfont icon-cuo'></i>,
            title: 'step2',
            subTitle: 'subTitle2',
            description: 'description2'
          }, {
            icon: <i className='iconfont icon-message_SendSuccessfully'></i>,
            title: 'step3',
            subTitle: 'subTitle3',
            description: 'description3'
          }]}
          current={2}
          onChange={
            (e) => {
              console.log(e)
            }
          }
        />
      </div>
    )
  }
}
ReactDom.render(<Demo />, document.querySelector('#codeWapper'))