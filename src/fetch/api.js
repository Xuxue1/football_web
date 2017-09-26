import axios from 'axios'
import Vue from 'vue'
Vue.prototype.$http = axios
import qs from 'qs'
import router from './../router'

// axios 配置
axios.defaults.timeout = 5000
axios.defaults.headers = {
  'Content-Type': 'application/x-www-form-urlencoded;application/json;charset=UTF-8',
  'X-Requested-With': 'XMLHttpRequest',
  'Accept': 'application/json'
}
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
axios.defaults.withCredentials = true
// axios.defaults.baseURL = 'http://localhost:8000/'

// POST传参序列化
axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

// 返回状态判断
axios.interceptors.response.use((response) => {
  if (response.status) {
    // return Promise.reject(response)
  }
  return response
}, (error) => {
  if (error && error.response) {
    switch (error.response.status) {
      case 400:
        alert('请求错误')
        break
      case 401:
        alert('未授权，请登录')
        break
      case 403:
        alert('拒绝访问')
        break
      case 404:
        alert('请求地址出错:' + error.response.data.data)
        break
      case 408:
        alert('请求超时')
        break
      case 500:
        alert('服务器内部错误')
        break
      case 501:
        alert('服务未实现')
        break
      case 502:
        alert('网关错误')
        break
      case 503:
        alert('服务不可用')
        break
      case 504:
        alert('网关超时')
        break
      case 505:
        alert('HTTP版本不受支持')
        break
      default:
    }
  }
  return Promise.reject(error)
});
export function fetch (method, url, params) {
  return new Promise(function (resolve, reject) {
    axios[method](url, params)
      .then(response => {
        // 获取访问系统信息的status,若为1,则未登录
        if (response.data.status) {//todo 添加登录的逻辑
          if (response.data.info.functionEntity) {
            const restUrl = response.data.info.functionEntity.data.restUrl
            const serviceUrl = response.data.info.functionEntity.data.service
            const restUrlApi = restUrl.slice(restUrl.indexOf('security-cas') - 1)
            const serviceUrlApi = serviceUrl.slice(serviceUrl.indexOf('video-analysis-platform') - 1)
            // 获取访问系统信息的validate,若为false则请求restUrl
            if (response.data.validate === false) {
              axios.post(restUrlApi)
                .then(response => {
                  if (!response.data.status) {
                    let TGTdata = {
                      TGT: response.data.data
                    }
                    axios.post(serviceUrlApi, TGTdata)
                      .then(response => {
                        router.go(0)
                        resolve(response.data)
                      })
                      .catch((response) => {
                        reject(response)
                      })
                  } else {
                    router.push({path: '/Login'})
                  }
                  resolve(response.data)
                })
                .catch((response) => {
                  reject(response)
                })
            }
          }
        }
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
export default {
  // method 请求方法 get post put delete
  // url 请求地址
  // params 请求参数
  api (method, url, params) {
    return fetch(method, url, params)
  }
}
