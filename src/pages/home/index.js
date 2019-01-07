import React, { Component } from 'react'
import { Carousel } from 'antd-mobile'
import Tab from '@/components/tab'
import './style.less'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '世界',
      imgList: [{
        url: require('../../assets/home/banner_b.jpeg'),
        title: {
          'top': '都说我太过严肃，我只在意你是否需要保护',
          'bottom': '单人短期空中直升机院前救援+地面120协调服务'
        },
        id: 'B'
      }, {
        url: require('../../assets/home/banner_c.jpeg'),
        title: {
          'top': '命运可以改变，我永远在你身边',
          'bottom': '单人全年空中直升机医疗救援+地面120协调服务'
        },
        id: 'C'
      }, {
        url: require('../../assets/home/banner_d.jpeg'),
        title: {
          'top': '每天都要保护你，我比时间更爱你',
          'bottom': '双人全年空中直升机医疗救援+地面120协调+道路救援服务'
        },
        id: 'D'
      }, {
        url: require('../../assets/home/banner_e.jpeg'),
        title: {
          'top': '守护你们，是我一生最重要的决定',
          'bottom': '家庭全年直升机医疗救援+地面120协调+道路救援+出险代步车服务'
        },
        id: 'E'
      }]
    }
  }

  static getDerivedStateFromProps(props, state) {
    return null
  }

  handleClick = name => {
    this.props.history.push(`/product/${name}`)
  }
  
  render() {
    const { imgList } = this.state
    return (
      <div className="home_box">
        <div className="avatar">
          <button className='button' onClick={this.handleClick.bind(this, 'A')}></button>
        </div>
        <div className="title">
          空降服务{ this.state.text }
          <img src={require('../../assets/home/logo.png')} alt=""/>
        </div>
        <div className="carousel">
          <Carousel
            autoplay
            cellSpacing={10}
            dots={false}
            slideWidth={0.8}
          >
            {imgList.map(item => (
              <div className="item" key={item} onClick={this.handleClick.bind(this, item.id)}>
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
