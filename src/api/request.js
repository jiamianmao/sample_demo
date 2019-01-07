import axios from 'axios'
import qs from 'qs'
import Cookie from 'js-cookie'

const service = axios.create({
  timeout: 5000,
  baseURL: '/apis',
  withCredentials: true
})

service.interceptors.request.use(
  config => {
    config.headers = {
      'X-WxFrom': 1,
      'X-SessionId': Cookie.get('token')
    }

    if (config.method === 'post') {
      config.data = qs.stringify(config.data)
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    }
    return config
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code === 200) {
      return res
    } else {
      return Promise.reject('error')
    }
  },
  error => {
    if (error.toString().includes('401')) {
      Cookie.remove('token')
      window.location.href = '/login'
    }
  }
)


export default service
