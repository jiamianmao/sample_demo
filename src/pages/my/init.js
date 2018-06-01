import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Loadable  from 'react-loadable'

function Loading() {
  return <div>Loading...</div>;
}

const Order = Loadable({
  loader: () => import('@/pages/my/children/order'),
  loading: Loading
})
const Address = Loadable({
  loader: () => import('@/pages/my/children/address'),
  loading: Loading
})
const Car = Loadable({
  loader: () => import('@/pages/my/children/car'),
  loading: Loading
})
const Account = Loadable({
  loader: () => import('@/pages/my/children/account'),
  loading: Loading
})
const About = Loadable({
  loader: () => import('@/pages/my/children/about'),
  loading: Loading
})
const Content = Loadable({
  loader: () => import('@/pages/my/children/content'),
  loading: Loading
})
const Index = Loadable({
  loader: () => import('./index'),
  loading: Loading
})


class MyInit extends Component {

  render() {
    return (
      <Switch>
        <Redirect exact from='/my' to='/my/index'></Redirect>
        <Route path='/my/index' component={Index}></Route>
        <Route path='/my/order' component={Order}></Route>
        <Route path='/my/address' component={Address}></Route>
        <Route exact path='/my/car' component={Car} />
        <Route path='/my/car/content' component={Content} />        
        <Route path='/my/account' component={Account}></Route>
        <Route path='/my/about' component={About}></Route>
      </Switch>
    )
  }
}

export default MyInit
