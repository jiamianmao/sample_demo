import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'antd/lib/carousel'
import Tab from '@/components/tab'
import 'antd/lib/carousel/style/index.css'
import './style.less'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '世界',
      imgList: [{
        url: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=921627761,2952878653&fm=58&bpow=690&bpoh=986',
        name: 'yangchenglin'
      }, {
        url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=572887364,2588581476&fm=27&gp=0.jpg',
        name: 'qiushuzhen'
      }, {
        url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=463932906,1790239687&fm=27&gp=0.jpg',
        name: 'quanzhixian'
      }, {
        url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3395218875,518326064&fm=27&gp=0.jpg',
        name: 'guilunmei'
      }]
    }
  }

  handleClick(name) {
    this.props.history.push(`/product/${name}`)
  }
  
  render() {
    const { imgList} = this.state
    return (
      <div className="home_box">
        <div className="avatar">
          <Link className='button' to='/product/linjiaxin'>少年，选我</Link>
        </div>
        <div className="carousel">
          <Carousel autoplay>
            {imgList.map(item => (
              <div className="item" key={item} onClick={() => this.handleClick(item.name)}>
                <img src={item.url} alt=""/>
              </div>
            ))}
          </Carousel>
        </div>
        <Tab />
      </div>
    )
  }
}

export default Home
