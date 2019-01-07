import request from './request'

export function userCenter() {
  return request({
    url: 'msite/auth/userCenter'
  })
}

export function userInfo(id) {
  return request({
    url: `msite/auth/getUserInfo?id=${id}`
  })
}

export function getOrderDesc(userId) {
  return request({
    url: `msite/order/getListForFront?userid=${userId}`
  })
}

export function getContactList() {
  return request({
    url: `msite/commonContact/list`
  })
}

export function getVehicleList() {
  return request({
    url: 'msite/commonVehicle/list'
  })
}

export function getPeopleDesc(id) {
  return request({
    url: `msite/commonContact/getById?id=${id}`
  })
}

export function commitFeedback(suggestion) {
  return request({
    url: 'msite/auth/commitFeedback',
    method: 'post',
    data: {
      suggestion
    }
  })
}
