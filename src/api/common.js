import request from './request'

export function login(data) {
  return request({
    url: 'msite/auth/loginByMobile',
    method: 'post',
    data
  })
}

export function sendVCode(params, type) {
  return request({
    url : 'common/sendVCode',
    method: 'post',
    data: Object.assign(params, type)
  })
}