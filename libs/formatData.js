// 时间戳站本地数据
export const toLocalDate = (time, unit = 'ms') => {
  if (!time) return
  let date
  if (unit !== 'ms') {
    time = time * 1000
  }
  if (isNaN(time)) {
    throw new Error('时间戳格式出错')
  } else {
    date = new Date(time)
  }
  let year = date.getFullYear()
  let month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
  let day = date.getDay() < 10 ? `0${date.getDay()}` : date.getDay()
  let hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
  let minute =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
  let second =
    date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}

//数组排序
export const sortArr = (arr, type = 'up') => {
  switch (type) {
    case 'up': {
      return arr.sort((a, b) => a - b)
    }

    case 'down': {
      return arr.sort((a, b) => b - a)
    }
    default:
      return arr
  }
}

//数组去重
export const uniqueArr = (arr) => [...new Set(arr)]

//数组并集
export const unionArr = (arr1, arr2) => [...new Set([...arr1, ...arr2])]

//数组交集
export const intersectArr = (arr1, arr2) => [
  ...new Set(arr1.filter((x) => b.includes(x))),
]

// 创建一个唯一的字符串id，存在相同的可能性，但极小
export const uniqueId = () => {
  let random = Math.random().toString(36).split('.')[1]
  let time = Date.now().toString(36)
  return `${random}${time}`
}
