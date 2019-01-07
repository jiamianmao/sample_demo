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
const People = Loadable({
  loader: () => import('@/pages/my/children/people'),
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
const PeopleCreate = Loadable({
  loader: () => import('@/pages/my/children/people_create'),
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
const userInfo = Loadable({
  loader: () => import('@/pages/my/children/userInfo'),
  loading: Loading
})

const Suggest = Loadable({
  loader: () => import('@/pages/my/children/suggest'),
  loading: Loading
})

class MyInit extends Component {

  render() {
    return (
      <Switch>
        <Redirect exact from='/my' to='/my/index' />
        <Route path='/my/index' component={Index} />
        <Route path='/my/order' component={Order} />
        <Route path='/my/userInfo' component={userInfo} />
        <Route exact path='/my/car' component={Car} />
        <Route path='/my/car/content' component={Content} />        
        <Route path='/my/account' component={Account} />
        <Route exact path='/my/people' component={People} />
        <Route path='/my/people/create' component={PeopleCreate} />
        <Route path='/my/suggest' component={Suggest} />
      </Switch>
    )
  }
}

export default MyInit
