import { Component } from 'react'
import { withRouter } from 'react-router-dom'

@withRouter
class Auth extends Component {
  constructor(props) {
    super(props)
    this.state ={}
  }

  componentDidMount() {
    const whiteList = ['/home']
    const { pathname } = this.props.location
    if (whiteList.includes(pathname)) {
      return
    }

    this.props.history.push('/login')
  }

  render() {
    return (
      null
    )
  }
}

export default Auth
