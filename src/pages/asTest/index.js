import React, { Component, Fragment } from 'react'
import { CSSTransition } from 'react-transition-group'
import './style.less'

class Test extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true
    }
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle() {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <Fragment>
        <CSSTransition
          in={this.state.show}
          timeout={1000}
          classNames='fade'
          appear={true}
        >
          <div className={this.state.show ? 'show' : 'hide'}>你这个小可爱!</div>
        </CSSTransition>
        <button style={{position: 'fixed', top: 100, left: 20}} onClick={this.handleToggle}>一起长大的约定</button>
      </Fragment>
    )
  }
}

export default Test