import config from './config'
// import { reject } from 'core-js/fn/promise'
// import { reject } from 'promise'

//封装ajax请求功能函数
export default(url,data={},method="GET")=>{
  return new Promise((resolve,reject)=>{
    vue.request({
      url:config.host,
      data,
      method,
      success:(res)=>{
        console.log(res)
        resolve(res.data)
      },
      fail:(err)=>{
        console.log(err)
        resolve(false)
      }
    })
  })
}