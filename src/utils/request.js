import axios from 'axios'
import {
  Loading,
  MessageBox,
  Message
} from 'element-ui'

const service = axios.create({
  //默认请求路径
  baseURL: process.env.VUE_APP_PROXY ? null : process.env.VUE_APP_BASE_URL, // url = base url + request url

  //请求多久延时
  timeout: 5000,

  // 设置请求头
  // headers: {
  //   'Content-Type': 'application/json'
  // }
})
//加载动画
let loadingInstance;
// 请求拦截---请求前
service.interceptors.request.use(
  config => {
    //启用加载
    loadingInstance = Loading.service()
    return config; //避免报错
  },
  error => {

  }
)

// 请求拦截---请求后
service.interceptors.response.use(

  response => {
    const res = response.data

    //关闭加载动画
    loadingInstance.close();
    //请求成功的code
    const succeedCode = [9]
    //成功且需要提示的code
    const msgCode = [6, 15, 13]
    // 根据后台的code判断请求状态
    if (succeedCode.includes(res.message.code)) {
      return res
    } else if (msgCode.includes(res.message.code)) {
      Message({
        message: res.message.msg || 'success',
        type: 'success',
        duration: 3 * 1000
      })
      return res
    } else {
      Message({
        message: res.message.msg || 'warning',
        type: 'warning',
        duration: 3 * 1000
      })
      // return Promise.reject(new Error(res.message || 'Error'))
      return Promise.reject(res.message)

    }
  },
  error => {
    //关闭加载动画
    loadingInstance.close();
    console.log('err' + error)
    Message({
      message: error.message,
      type: 'error',
      duration: 3 * 1000
    })
    return Promise.reject(error)
  }
)

export default service