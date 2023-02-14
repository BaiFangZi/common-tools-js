// 生成legend btn按钮形式 默认间隔15%
// data:数据源 size:一行能显示的数目 orgent: 排列方式

export const formatLegendBtn = (data, { size, orgent = 'horizontal' }) => {
    let legend = []
    if (data.length > size) {
      //多行显示
      let index = 0
      let resIndex = 0
      const multipleDim = [] //存放被切割成size大小的数组
      while (index < data.length) {
        multipleDim[resIndex++] = data.slice(index, (index += size))
      }
      for (let index in multipleDim) {
        legend = legend.concat(formatLayout(multipleDim[index], index, orgent))
      }
    } else {
      //单行显示
      legend = formatLayout(data, 0, orgent)
    }
    return legend
  }
  
  function formatLayout(line, index, orgent) {
    // console.log(orgent)
    const commonStyle = {
      itemHeight: 10,
      itemWidth: 10,
      padding: 7,
      borderRadius: 2,
      backgroundColor: '#F8FAFC',
      orgent: orgent,
    }
    let direction =
      orgent === 'horizontal'
        ? ['left', 'right', 'bottom']
        : ['top', 'bottom', 'right']
  
    const interval = 100 / line.length
    commonStyle[direction[2]] = 10 * index + '%'
    let result = []
    let prefixIndex = 0
    let suffixIndex = line.length - 1
    let offset = 5 // 偏移量，百分比
    while (prefixIndex < suffixIndex) {
      result[prefixIndex] = {
        ...commonStyle,
        [direction[0]]: offset + prefixIndex * interval + '%',
        data: [
          {
            name: line[prefixIndex].name,
          },
        ],
      }
      result[suffixIndex] = {
        ...commonStyle,
        [direction[1]]: offset + prefixIndex * interval + '%',
        data: [
          {
            name: line[suffixIndex].name,
          },
        ],
      }
      prefixIndex++
      suffixIndex--
    }
    if (prefixIndex == suffixIndex) {
      //奇数 2
      result[prefixIndex] = {
        ...commonStyle,
        [direction[1]]: 'center',
        data: [
          {
            name: line[prefixIndex].name,
          },
        ],
      }
    } else if (prefixIndex > suffixIndex) {
      // //偶数  不包括2
      // for (let item of result) {
      //   const key = 'left' in item ? 'left' : 'right'
      //   // const { left, right } = item
      //   // let temp = left || right
      //   item[key] = item[key].slice(0, -1) - interval / 2 + '%'
      //   // item['left'||'right']
      // }
    }
    return result
  }
  