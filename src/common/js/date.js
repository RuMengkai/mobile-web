export function formatedDate(time) {
  var date = new Date(time);
  var nowDate = new Date();
  if ((formatDate(new Date(time),'yyyy')-formatDate(nowDate,'yyyy'))<0) {
    return formatDate(date, "yyyy-MM-dd");
  }else if((formatDate(new Date(time),'MM')-formatDate(nowDate,'MM'))<0){
    return formatDate(date, "MM-dd");
  }else {
    var d=formatDate(nowDate,'dd')-formatDate(date, "dd");
    if(d==0){
      var h=formatDate(nowDate,'hh')-formatDate(date, "hh");
      if(h==0){
        var m=formatDate(nowDate,'mm')-formatDate(date, "mm")
        if(m<5){
          return "刚刚";
        }
        if (isNaN(m)) {
          return "1小时前";
        }
        return m+'分钟前';
      }else{
        return h+"小时前";
      }
    }
    if(d==1){
      return "昨天"
    }else{
      return d+"天前";
    }
  }
}


export function formatDate(date, fmt) {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = (o[k] + '').replace(/^0/,'');
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
};

export function formatDate2(date, fmt) {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = (o[k] + '').replace(/^0/,'');
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero2(str));
        }
    }
    return fmt;
};

function padLeftZero(str) {
    return ('00' + str).substr(str.length);
}
function padLeftZero2(str) {
  return str;
}


export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }

  if ((time + '').length === 10) {
    time = +time * 1000
  }

  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    date = new Date(parseInt(time))
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}
