export default { //time 单位为秒
  toMoment(time) {
    // time = parseInt(time)
    const date = new Date(time * 1000)
    var addZero = (num) => num < 10 ? `0${num}` : num

    const F = {
      y: date.getFullYear(),
      m: addZero(date.getMonth() + 1),
      d: addZero(date.getDate())
    };
    const T = {
      h: addZero(date.getHours()),
      m: addZero(date.getMinutes()),
      s: addZero(date.getSeconds())
    }
    return `${F.y}-${F.m}-${F.d} ${T.h}:${T.m}:${T.s}`
  },
  toStamp(time) {
    const date = new Date(time)
    return date.getTime()
  }
}
