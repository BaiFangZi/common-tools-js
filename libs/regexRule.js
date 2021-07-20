//用户名4-16位 包含数字、英文、特殊符号_-
export const isUser =(val)=> /^[a-zA-Z0-9_-]{4,16}$/.test(val)

//中英文、数字、和下划线 6-32位
export const isName =(val)=> /^[\u4E00-\u9FA5A-Za-z0-9_]{6,32}$/.test(val)

//整数
export const isInt = (val) => /^-?\d+$/.test(val)

//正整数
export const isPosInt=(val) => /^\d+$/.test(val)

//负整数
export const negInt=(val)=> = /^-\d+$/.test(val)

//浮点数
export const float=(val)=> = /^-?([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0)$/.test(val)

//正浮点数
export const posFloat=(val)=> = /^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$/.test(val)

//负浮点数
export const isNegFloat = (val) => /^-([1-9]\d*\.\d*|0\.\d*[1-9]\d*)$/.test(val)

//中文姓名
export const isCName = (val) => /^[\u4E00-\u9FA5]{2,4}$/.test(val)

//手机
export const isTel = (val) =>
  /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/.test(
    val
  )

//邮箱
export const isEmail = (val) =>
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    val
  )
