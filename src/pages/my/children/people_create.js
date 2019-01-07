import React, { Component } from 'react'
import { getPeopleDesc } from '@/api/my'
import Man from '@/components/man'

class PeopleCreate extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    const pathArr = this.props.location.pathname.split('/')
    if (pathArr.length === 5) {
      this._getPeopleDesc(pathArr[4])
    }
  }

  _getPeopleDesc(id) {
    getPeopleDesc(id).then(res => {
      console.log(res)
    })
  }

  render() {
    return (
      <div className="people_create">
        <div className="required">
          <Man></Man>
        </div>
      </div>
    )
  }
}

export default PeopleCreate