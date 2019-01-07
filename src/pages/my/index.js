import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { userCenter } from '@/api/my'
import Tab from '@/components/tab'
import Storage from 'good-storage'
import { PRODUCT } from '@/util/dict'
import './index.less'

class MyIndex extends Component {
  constructor(props) {
    super(props)
    this.handleUserInfo = this.handleUserInfo.bind(this)
    this.state = {
      user: {},
      members: [],
      funcList: [
        {
          icon: 'order',
          text: '我的订单'
        }, {
          icon: 'exchange',
          text: '权益兑换'
        }, {
          icon: 'people',
          text: '常用人员'
        }, {
          icon: 'car',
          text: '常用车辆'
        }, {
          icon: 'suggest',
          text: '提交建议'
        }
      ]
    }
  }

  componentDidMount() {
    this._getUserCenter()
  }

  handleUserInfo() {
    const { id } = this.state.user
    this.props.history.push(`/my/userInfo?id=${id}`)
  }

  _getUserCenter() {
    userCenter().then(res => {
      const { payload } = res
      const arr = ['firstAid', 'ambulance', 'medicalTransfer', 'roadRescue', 'scooter']
      const newArr = arr.map(item => {
        return {
          key: item,
          value: payload.members[item]
        }
      })

      Storage.session.set('userInfo', JSON.stringify(payload.user))

      this.setState({
        user: payload.user,
        members: newArr
      })
    })
  }

  render() {
    const { user, members, funcList } = this.state
    return (
      <div className='myIndex'>
        <div className="top">
          <div className="left">
            <p>{ user.realName }</p>
            <p>空降会员</p>
            <p>{ user.verified ? '已认证' : '未认证' }</p>
            <p onClick={this.handleUserInfo}>查看并编辑个人资料</p>
          </div>
          <div className="right">
            <img src={ user.avatarUrl } alt=""/>
          </div>
        </div>
        <div className="rightList">
          <h3>我的权益</h3>
          <div className="box">
            {members.map(item => (
              <div className="item" key={item.key}>
                <img src={require(`../../assets/my/${item.key}${item.value ? "" : "_will"}.png`)} alt=""/>
                <span>{ PRODUCT[item.key] }</span>
              </div>
            ))}
          </div>
        </div>
        <ul className='funcBox'>
          {funcList.map(item => (
            <li className='funcItem' key={item.icon}>
              <Link className='funcItem_Link' to={`/my/${item.icon}`}>
                <img src={require(`../../assets/my/${item.icon}.png`)} alt=""/>
                <span>{ item.text }</span>
                <img src={require('../../assets/my/arrow.png')} alt=""/>
              </Link>
            </li>
          ))}
          
        </ul>
        <Tab />
      </div>
    )
  }
}

export default MyIndex
