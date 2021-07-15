//用户名4-16位 包含数字、英文、特殊符号_-
export const userReg = /^[a-zA-Z0-9_-]{4,16}$/

//中英文、数字、和下划线 6-32位
export const name = /^[\u4E00-\u9FA5A-Za-z0-9_]{6,32}$/

//整数
export const intReg = /^-?\d+$/

//正整数
export const posIntReg = /^\d+$/

//负整数
export const negIntReg = /^-\d+$/

//浮点数
export const floatReg = /^-?([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0)$/

//正浮点数
export const posFloatReg = /^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$/

//负浮点数
export const negFloatReg = /^-([1-9]\d*\.\d*|0\.\d*[1-9]\d*)$/

//中文姓名
export const cName = /^[\u4E00-\u9FA5]{2,4}$/

//手机
export const telReg =
  /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/

//邮箱
export const emailReg =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
