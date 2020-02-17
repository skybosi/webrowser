/**
 * 解析器
 */
/**
 * 关键字映射表
 */
const MAP_KEY = {
  'goto': gotoFunc,
  'import': 'import',
  'v-bind': 'v-bind',
}

/**
 * 操作符银蛇表
 */
const MAP_OP = {
  '@': _bind,
  '#': _model,
  ':': _on,
}

/**
 * 忽略递归的关键字key
 */
const IGNOREKEY = {
  '_on': 1,
  '_env': 1,
  '_bind': 1,
  '_model': 1
}
const NULLTYPE = '[object Null]'
const ARRAYTYPE = '[object Array]'
const OBJECTTYPE = '[object Object]'
const NUMBERTYPE = '[object Number]'
const STRINGTYPE = '[object String]'
const FUNCTIONTYPE = '[object Function]'
var parser = {}

function parse(data, path, route) {
  const dataType = type(data)
  let _path = path || ''
  let _route = route || ''
  let paths = []
  // 初始化数据
  paths['_'] = {}, paths['$'] = {}, paths['#'] = {}
  paths['_on'] = data['methods'] || {}, paths['_bind'] = data['_bind'] || {}, paths['_model'] = data['_model'] || {}
  // 清空老数据
  _init(data, _route)
  // 递归处理数据
  for (let key in data) {
    if (data[key] !== undefined && !IGNOREKEY[key]) {
      key = (dataType == ARRAYTYPE) ? Number(key) : key
      _deepParse(key, data[key], data, data, _path, _route, paths)
    }
  }
  Object.assign(data, paths)
  return paths
}

/**
 * 初始化数据
 */
function _init(data, _route) {
  data['_'] = {}, data['$'] = {}, data['#'] = {}, data['_on'] = data['_on'] || data['methods'] || {}
  // data['_bind'] = {}, data['_model'] = {}
  data['_env'] = {
    _id: BKDRHash(_route),
    _route: _route
  }
}

/**
 * 深度遍历所有的结构
 * @index: Object的key
 * @data: Object的value
 * @parent: 父Object
 * @root: 根Object
 * @curpath: 当前所在path
 * @curoute: 当前所在route, 与curpath类似
 * @paths: 存储的解析后的所有数据
 * @return: paths
 */
function _deepParse(index, data, parent, root, curpath, curoute, paths) {
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
      data._env._id = BKDRHash(route)
      data._env._path = path
      data._env._route = route
      data._env._index = index
      data._env._method = null
      paths['#'][data._env._id] = data
    }
    for (let key in data) {
      if (data[key] !== undefined && !IGNOREKEY[key]) {
        key = (dataType == ARRAYTYPE) ? Number(key) : key
        _deepParse(key, data[key], data, root, path, route, paths)
      }
    }
  } else {
    // 处理事件及数据绑定
    if (data && MAP_OP[data[0]]) {
      MAP_OP[data[0]](root, parent, paths, index, data)
    }
    paths['$'][path] = data
  }
  // 处理关键字
  if (MAP_KEY[index]) {
    if (!paths['_'][index]) {
      paths['_'][index] = []
    }
    paths['_'][index][path] = {
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
  let arr = path.split('.')
  let {
    _arr,
    _path,
    _route
  } = MAP_KEY[arr[arr.length - 1]](arr, path, route)
  const len = _arr.length - 1
  parse(value, _path, _route)
  _arr.reduce((cur, key, index) => {
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

/**
 * goto 关键字处理函数
 */
function gotoFunc(arr, path, route) {
  let keyword = '.' + arr.pop()
  path = path.substring(0, path.length - keyword.length)
  route = route.substring(0, route.length - keyword.length)
  return {
    _arr: arr,
    _path: path,
    _route: route
  }
}

/**
 * BKDR Hash (modified version)
 *
 * @param {String} str string to hash
 * @returns {Number}
 */
function BKDRHash(str) {
  var seed = 131;
  var seed2 = 137;
  var hash = 0;
  // make hash more sensitive for short string like 'a', 'b', 'c'
  str += 'x';
  // Note: Number.MAX_SAFE_INTEGER equals 9007199254740991
  var MAX_SAFE_INTEGER = parseInt(9007199254740991 / seed2);
  for (var i = 0; i < str.length; i++) {
    if (hash > MAX_SAFE_INTEGER) {
      hash = parseInt(hash / seed2);
    }
    hash = hash * seed + str.charCodeAt(i);
  }
  return hash;
};

/**
 * 根据path 获取Object中path对应的value
 */
function get(path, obj) {
  let arr = path.split('.')
  const len = arr.length - 1
  let value = null
  arr.reduce((cur, key, index) => {
    if (!(cur[key]))
      throw `${key} 不存在!`
    if (index === len) {
      value = cur[key]
    }
    return cur[key]
  }, obj)
  return value
}

/**
 * 数据绑定
 */
function _bind(root, parent, paths, index, value) {
  let _value = value.slice(1)
  let _arr = _value.split('.')
  let _len = _arr.length - 1
  _arr.reduce((cur, key, index) => {
    (index === _len) ? cur[key] = null: cur[key] = {}
    return cur[key]
  }, paths['_bind'])
  Object.defineProperty(parent, index, {
    set: function(v) {
      _arr.reduce((cur, key, index) => {
        if (index === _len) {
          cur[key] = v
        }
        return cur[key]
      }, paths['_bind'])
    },
    get: function() {
      let data = null
      _arr.reduce((cur, key, index) => {
        if (index === _len) {
          data = cur[key]
        }
        return cur[key]
      }, paths['_bind'])
      return data
    }
  })
}

/**
 * 数据双向绑定
 */
function _model(root, parent, paths, index, value) {
  let _value = value.slice(1)
  let _arr = _value.split('.')
  let _len = _arr.length - 1
  _arr.reduce((cur, key, index) => {
    (index === _len) ? cur[key] = null: cur[key] = {}
    return cur[key]
  }, paths['_bind'])
  Object.defineProperty(parent, index, {
    set: function(v) {
      console.log('set data:' + this._env._route, v, this)
      _arr.reduce((cur, key, index) => {
        if (index === _len) {
          cur[key] = v
        }
        return cur[key]
      }, paths['_bind'])
    },
    get: function() {
      let data = null
      _arr.reduce((cur, key, index) => {
        if (index === _len) {
          data = cur[key]
        }
        return cur[key]
      }, paths['_bind'])
      return data
    }
  })
}

/**
 * 函数绑定
 */
function _on(root, parent, paths, index, value) {
  let _funcName = value.slice(1)
  _funcName && (parent._env._method = root['_on'][_funcName]) && (parent._env._methodName = _funcName)
}

module.exports = {
  get: get,
  type: type,
  parse: parse,
  modify: modify,
  BKDRHash: BKDRHash,
}