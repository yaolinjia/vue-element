import axios from 'axios'
import { MessageBox, Message } from 'element-ui'

const service = axios.create({
  //默认请求路径
  baseURL:process.env.VUE_APP_PROXY?null: process.env.VUE_APP_BASE_URL,// url = base url + request url

  //请求多久延时
  timeout: 5000, 
  
  // 设置请求头
  // headers: {
  //   'Content-Type': 'application/json'
  // }
})

// 请求拦截---请求前
// service.interceptors.request.use(
//   config => {

//   },
//   error => {

//   }
// )

// 请求拦截---请求后
service.interceptors.response.use(

  response => {
    const res = response.data
    // 根据后台的code判断请求状态
    if (res.message.code !== 9) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
        MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
          confirmButtonText: 'Re-Login',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) 
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
