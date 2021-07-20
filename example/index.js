import { formatData, verify, useFlexible, debounce, throttle } from '../dist'
import { arrayToExcel, tableToExcel } from '../libs/Export2Excel'
function testFormatData() {
  console.log('测试格式化时间', formatData.toLocalDate(new Date()))
  console.log('测试格式化时间', formatData.toLocalDate(+new Date()))

  let arr = [1, 3, 4, 7, 5, 6, 9]
  console.log('测试数组排序', formatData.sortArr(arr, 'up'))
  console.log('测试数组排序', formatData.sortArr(arr, 'down'))

  console.log('测试数组去重', formatData.uniqueArr([1, 2, 3, 3, 5, 1, 3]))

  console.log('测试取两个数组的并集', formatData.unionArr([1, 2, 3], [2, 3, 4]))

  console.log(
    '测试取两个数组的交集',
    formatData.intersectArr([1, 2, 3], [2, 3, 4])
  )

  console.log('测试唯一的字符串id', formatData.uniqueId())
}

//测试flexible.js
function testFlexible() {
  useFlexible(10)
}

//测试防抖
function testDebounce() {
  let debounceCount = 0
  let debounceBox = document.querySelector('.debounce')
  debounceBox.addEventListener(
    'scroll',
    debounce(
      () => {
        document.querySelector('.debounce .msg').innerText = debounceCount++
      },
      100,
      false
    )
  )
  let noDebounceCount = 0
  let noDebounceBox = document.querySelector('.no-debounce')
  // (noDebounceBox)
  noDebounceBox.addEventListener('scroll', () => {
    document.querySelector('.no-debounce .msg').innerText = noDebounceCount++
  })
}
// 测试节流
function testThrottle() {
  let throttleCount = 0
  // let throttleBox = document.querySelector('.throttle-test-box')
  // console.log(throttleBox)
  let throttleInput = document.querySelector('.throttle')

  throttleInput.addEventListener(
    'input',
    throttle(() => {
      document.querySelector('.throttle-test-box .msg').innerText =
        throttleCount++
    }, 1000)
  )
}

// 测试导出excel
function testExportExcel() {
  let header = ['时间', '访问量']
  let data = [
    ['00:00:00', 20],
    ['01:00:00', 30],
    ['02:00:00', 40],
  ]
  let filename = '网站访问量'

  document.querySelector('.array-export').addEventListener('click', () => {
    arrayToExcel({
      header,
      data,
      filename,
    })
  })
  document.querySelector('.table-export').addEventListener('click', () => {
    tableToExcel({
      id: 'table-excel-data',
      fileName: '存款',
    })
  })
}
function test() {
  testFormatData()
  testFlexible()
  testDebounce()
  testThrottle()
  testExportExcel()
}
test()
