import axios from 'axios'

const service = axios.create({
  timeout: 5000,
  baseURL: ''
})

service.interceptors.response.use(
  response => {
    const res = response.data
    return res
  }
)


export default service
