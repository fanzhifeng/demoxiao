import { Promise } from "core-js";
import { resolve } from "dns";
import { rejects } from "assert";

function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

//抽取自己的ajax使用promise
function ThenAjax(url,data){
  wx.showLoading({
    title: '加载中',
  })
  return new Promise((resolve,reject)=>{
    
    wx.request({
      url: `https://www.zhengzhicheng.cn/api/public/v1/${url}`, //开发者服务器接口地址",
      data: data || {}, //请求的参数",
      method: 'GET',
      dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
      success: res => {
        resolve(res.data.message)
      },
      fail: xhr => {
        reject(xhr);
      },
      complete: () => {}
    });
  })
}
export default {
  formatNumber,
  formatTime,
  ThenAjax
}
