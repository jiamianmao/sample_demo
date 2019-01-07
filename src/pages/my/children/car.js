import React, { Component } from 'react'
import { getVehicleList } from '@/api/my'
import Storage from 'good-storage'
import './people.less'

class People extends Component {
  constructor(props) {
    super(props)
    this.state = {
      carList: []
    }
  }

  componentDidMount() {
    let userInfo = Storage.session.get('userInfo')
    userInfo && JSON.parse(userInfo)
    this._getVehicleList(userInfo.id)
  }

  hnadlePeople(id) {
    const url = id ? `/my/people/create/${id}` : '/my/people/create'
    this.props.history.push(url)
  }

  _getVehicleList(id) {
    getVehicleList(id).then(res => {
      this.setState({
        carList: res.payload
      })
    })
  }

  render() {
    const { carList } = this.state
    return (
      <div className='people'>
        <header className="top">
          <h3>常用权益车</h3>
          <svg onClick={() => this.hnadlePeople()} className="icon" aria-hidden="true">
            <use xlinkHref="#icon-plus"></use>
          </svg>
        </header>
        <main>
          {carList.map(item => (
            <section className='item' key={item.id}>
              <div className="left">
                <div className="name">所有人：{ item.owner }</div>
                <div className="idCard">身份证：{ item.plateNumber }</div>
              </div>
            </section>
          ))}
        </main>
      </div>
    )
  }
}

export default People
