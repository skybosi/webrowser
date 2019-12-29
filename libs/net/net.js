// server config
const _header = {
  'GET': {
    //设置参数内容类型为x-www-form-urlencoded
    'content-type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json',
    "Version": ''
  },
  'POST': {
    "Version": ''
  }
}

/**
 * 添加一些附加参数
 */
function addparams(params) {
  params = params || {}
  params.brand = encodeURIComponent(device.brand)
  params.model = encodeURIComponent(device.model)
  params.language = encodeURIComponent(device.language)
  params.system = encodeURIComponent(device.system)
  params.platform = encodeURIComponent(device.platform)
  params.client_id = encodeURIComponent(device.platform + "_" + device.system +
    "_" + device.brand + "_" + device.model)
  return params
}

/**
 * object 转换为query url
 */
function json2args(json) {
  var str = [];
  for (var p in json) {
    str.push(p + "=" + json[p]);
  }
  return str.join("&");
}

function getData(res) {
  console.log(res)
  var data = null
  var message = null
  var header = res.header
  if (200 == res.statusCode) {
    var result = res.data
    message = result.message || errcode.message[result.errcode + ""]
    if (result && result.data && errcode.OK_STATUS == result.status) {
      data = result.data
      header = res.header
    }
  } else {
    header = res.header
  }
  return {
    "data": data,
    "message": message,
    "header": header
  }
}

/**
 * 封装http 请求方法
 */
const http = (url, method, data) => {
  //返回promise 对象
  return new Promise((resolver, reject) => {
    wx.request({
      url: config.SERVER_DOMAIN + url, //服务器url+参数中携带的接口具体地址
      data: data, //请求参数
      header: _header[method],
      method: method || 'POST',
      success: function(res) {
        resolver(getData(res))
      },
      fail: function(e) {
        wx.getNetworkType({
          success: function(res) {
            if (res.networkType == 'none') {
              wx.showToast({
                title: '网络似乎不太顺畅',
              })
            }
          },
        })
        // 监控网络变化
        wx.onNetworkStatusChange(function(res) {
          if (!res.isConnected) {
            wx.showToast({
              title: '网络似乎不太顺畅',
            })
          }
        })
        reject(e)
      }
    })
  }).catch((e) => {
    console.log(e)
  });
}

/**
 * get request
 */
const _get = (url, args) => {
  url = decodeURIComponent(url)
  var query = addparams(args)
  return http(url, "GET", query)
}

/**
 * post request
 */
const _post = (url, args, body) => {
  url = decodeURIComponent(url)
  args = addparams(args)
  args = json2args(args)
  if (-1 == url.indexOf('?')) {
    url = url + "?" + args
  } else {
    url = url + "&" + args
  }
  return http(url, "POST", body)
}

module.exports = {
  HttpGet: _get,
  HttpPost: _post,
}