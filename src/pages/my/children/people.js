import React, { Component } from 'react'
import { getContactList } from '@/api/my'
import Storage from 'good-storage'
import './people.less'

class People extends Component {
  constructor(props) {
    super(props)
    this.state = {
      peopleList: []
    }
  }

  componentDidMount() {
    let userInfo = Storage.session.get('userInfo')
    userInfo && JSON.parse(userInfo)
    this._getContactList()
  }

  hnadlePeople(id) {
    const url = id ? `/my/people/create/${id}` : '/my/people/create'
    this.props.history.push(url)
  }

  _getContactList() {
    getContactList().then(res => {
      this.setState({
        peopleList: res.payload
      })
    })
  }

  render() {
    const { peopleList } = this.state
    return (
      <div className='people'>
        <header className="top">
          <h3>常用权益人</h3>
          <svg onClick={() => this.hnadlePeople()} className="icon" aria-hidden="true">
            <use xlinkHref="#icon-plus"></use>
          </svg>
        </header>
        <main>
          {peopleList.map(item => (
            <section className='item' key={item.id}>
              <div className="left">
                <div className="name">{ item.realName }</div>
                <div className="idCard">身份证：{ item.idNumber }</div>
              </div>
              <svg onClick={() => this.hnadlePeople(item.id)} className="icon" aria-hidden="true">
                <use xlinkHref="#icon-edit"></use>
              </svg>
            </section>
          ))}
        </main>
      </div>
    )
  }
}

export default People
