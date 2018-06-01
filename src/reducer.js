import { combineReducers } from 'redux'
import { order } from './redux/order'
import { carManage } from './redux/carManage'

export default combineReducers({ order, carManage })
