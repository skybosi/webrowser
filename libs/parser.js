const MAP_KEY = {
  'goto': 'goto',
  'import': 'import',
  'v-bind': 'v-bind',
}
const IGNOREKEY = {
  '_env': 1
}
const NULLTYPE = '[object Null]'
const ARRAYTYPE = '[object Array]'
const OBJECTTYPE = '[object Object]'
const NUMBERTYPE = '[object Number]'
const STRINGTYPE = '[object String]'
const FUNCTIONTYPE = '[object Function]'
var parser = {}

function parse(data, path, route) {
  let paths = []
  paths['_'] = {}
  paths['$'] = {}
  const dataType = type(data)
  let _path = path || ''
  let _route = route || ''
  for (let key in data) {
    if (data[key] !== undefined && !IGNOREKEY[key]) {
      key = (dataType == ARRAYTYPE) ? Number(key) : key
      _deepParse(key, data[key], _path, _route, paths)
    }
  }
  Object.assign(data, paths)
  return paths
}

/**
 * 深度遍历所有的结构
 */
function _deepParse(index, data, curpath, curoute, paths) {
  const indexType = type(index)
  const dataType = type(data)
  let path = ''
  let route = ''
  if ('' != curpath) {
    path = (curpath != '' ? (curpath + ".") : '') + index
    // paths[path] = data
  } else {
    path = curpath + index
    // paths[path] = data
  }
  if (indexType == NUMBERTYPE) {
    route = (curoute != '' ? curoute : '') + "[" + index + "]"
  } else {
    route = (curoute != '' ? (curoute + '.') : '') + index
  }
  if (dataType == OBJECTTYPE || dataType == ARRAYTYPE) {
    if (dataType == OBJECTTYPE) {
      data._env = {}
      data._env._route = route
    }
    for (let key in data) {
      if (data[key] !== undefined && !IGNOREKEY[key]) {
        key = (dataType == ARRAYTYPE) ? Number(key) : key
        _deepParse(key, data[key], path, route, paths)
      }
    }
  } else {
    paths['$'][path] = data
  }
  // 处理关键字
  if (MAP_KEY[index]) {
    if (!paths['_'][MAP_KEY[index]]) {
      paths['_'][MAP_KEY[index]] = []
    }
    paths['_'][MAP_KEY[index]][path] = {
      _data: data,
      _path: path,
      _route: route
    }
  }
}

/**
 * 判断Object的类型
 */
function type(obj) {
  return Object.prototype.toString.call(obj)
}

/**
 * 根据path 修改Object中path对应的value
 */
function modify(path, route, value, obj) {
  const arr = path.split('.')
  let keyword = '.' + arr.pop()
  path = path.substring(0, path.length - keyword.length)
  route = route.substring(0, route.length - keyword.length)
  const len = arr.length - 1
  parse(value, path, route)
  arr.reduce((cur, key, index) => {
    if (!(cur[key]))
      throw `${key} 不存在!`
    if (index === len) {
      cur[key] = value
    }
    return cur[key]
  }, obj)
  Object.assign(obj['_'], value['_'])
  Object.assign(obj['$'], value['$'])
}

module.exports = {
  type: type,
  parse: parse,
  modify: modify
}