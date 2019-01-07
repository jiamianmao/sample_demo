import React, { Component } from 'react'
import { userInfo } from '@/api/my'
import './userInfo.less'

class UserInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInfo: {},
      url: ''
    }
  }

  componentDidMount() {
    const id = this.props.location.search.substr(4)
    this._getUserInfo(id)
  }

  selectFile(e) {
    let that = this
    let ref = this.refs.file
    let file = ref.files[0]
    var reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function() {
      that.setState({
        url: this.result
      })
    }
  }

  _getUserInfo(id) {
    userInfo(id).then(res => {
      this.setState({
        userInfo: res.payload
      })
    })
  }

  render() {
    const { userInfo } = this.state
    const { url } = this.state
    return (
      <div className='userInfo'>
        <div className='top'>
          <img className="avatar" src={userInfo.avatarUrl} alt=""/>
          <img src={url} alt=""/>
          <input className='file' type="file" ref='file' onChange={() => this.selectFile()} />
          <div className="content">
            <p>{userInfo.realName}</p>
            <span>修改头像</span>
          </div>
        </div>

        <ul className="bottom">
          <li>
            <div className="left">昵称</div>
            <div className="right">{userInfo.nickName}</div>
          </li>
          <li>
            <div className="left">性别</div>
            <div className="right">{userInfo.gender === 1 ? '男' : '女'}</div>
          </li>
          <li>
            <div className="left">所在地</div>
            <div className="right">{userInfo.address}</div>
          </li>
          <li>
            <div className="left">手机号</div>
            <div className="right">{userInfo.mobile}</div>
          </li>
          <li>
            <div className="left">身份证</div>
            <div className="right">{userInfo.idNumber}</div>
          </li>
          <li>
            <div className="left">绑定车辆</div>
            <div className="right">{userInfo.bindVehicleCount}</div>
          </li>
        </ul>
      </div>
    )
  }
}

export default UserInfo
