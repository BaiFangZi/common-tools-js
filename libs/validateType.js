// 是否为字符串
export const isString = (o) =>
  Object.prototype.toString.call(o).slice(8, -1) === 'String'

// 是否为数字
export const isNumber = (o) =>
  Object.prototype.toString.call(o).slice(8, -1) === 'Number'

// 是否为boolean
export const isBoolean = (o) =>
  Object.prototype.toString.call(o).slice(8, -1) === 'Boolean'
// 是否为为null
export const isNull = (o) =>
  Object.prototype.toString.call(o).slice(8, -1) === 'Null'
// 是否为undefined
export const isUndefined = (o) =>
  Object.prototype.toString.call(o).slice(8, -1) === 'Undefined'
// 是否为数组
export const isArray = (o) =>
  Object.prototype.toString.call(o).slice(8, -1) === 'Array'
// 是否为函数
export const isFunction = (o) =>
  Object.prototype.toString.call(o).slice(8, -1) === 'Function'

// 是否为对象
export const isObject = (o) =>
  Object.prototype.toString.call(o).slice(8, -1) === 'Object'

// 是否为时间
export const isDate = (o) =>
  Object.prototype.toString.call(o).slice(8, -1) === 'Date'

// 是否为正则
export const isRegExp = (o) =>
  Object.prototype.toString.call(o).slice(8, -1) === 'RegExp'

// 是否为Symbol
export const isSymbol = (o) =>
  Object.prototype.toString.call(o).slice(8, -1) === 'Symbol'

// 是否为Promise对象
export const isPromise = (o) =>
  Object.prototype.toString.call(o).slice(8, -1) === 'Promise'

// export default {
//   isString,
// }
