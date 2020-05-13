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
  '_#': _model,
  ':': _on,
  '!': _net
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
  paths['_'] = {}, paths['_$'] = {}, paths['_#'] = {}
  paths['_on'] = data['methods'] || {}, paths['_bind'] = data['_bind'] || {}, paths['_model'] = data['_model'] || {}
  // 清空老数据
  _init(data, _path, _route)
  // 递归处理数据
  for (let key in data) {
    if (data[key] !== undefined && !IGNOREKEY[key]) {
      key = (dataType == ARRAYTYPE) ? Number(key) : key
      _deepParse(key, data[key], data, data, _path, _route, paths)
    }
  }
  Object.assign(data, paths)
  return data
}

/**
 * 初始化数据
 */
function _init(data, path, route) {
  data['_'] = {}, data['_$'] = {}, data['_#'] = {}, data['_on'] = data['_on'] || data['methods'] || {}
  // data['_bind'] = {}, data['_model'] = {}
  let index = path.split('.') || []
  data['_env'] = {
    _id: hash(route),
    _index: Number(index[index.length - 1]),
    _path: path,
    _route: route,
    _node: data.beforeNode,
    node_: data.afterNode
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
      data._env._id = hash(route)
      data._env._path = path
      data._env._route = route
      data._env._index = index
      data._env._method = null
      data._env._node = data.beforeNode
      data._env._href = (data.path || "").trim()
      data._env.node_ = data.afterNode
      paths['_#'][data._env._id] = data
    }
    for (let key in data) {
      if (data[key] !== undefined && !IGNOREKEY[key]) {
        key = (dataType == ARRAYTYPE) ? Number(key) : key
        _deepParse(key, data[key], data, root, path, route, paths)
      }
    }
  } else {
    if (dataType == STRINGTYPE) {
      data = data.trim()
    }
    // 处理事件及数据绑定
    if (data && MAP_OP[data[0]]) {
      MAP_OP[data[0]](root, parent, paths, index, data)
    }
    paths['_$'][path] = data
  }
  // 处理关键字
  if (MAP_KEY[index]) {
    if (!paths['_'][index]) {
      paths['_'][index] = []
    }
    paths['_'][index].push({
      _href: data,
      _path: path,
      _route: route
    })
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
  // parse(value, _path, _route)
  parse(value)
  _arr.reduce((cur, key, index) => {
    if (!(cur[key]))
      throw `${key} 不存在!`
    if (index === len) {
      cur[key] = value
    }
    return cur[key]
  }, obj)
  // delete(value['list'])
  Object.assign(obj, value)
  Object.assign(obj['_'], value['_'])
  Object.assign(obj['_$'], value['_$'])
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

function hash(str) {
  str = str.toLowerCase();
  // 1315423911=b'1001110011001111100011010100111'
  var hash = 1315423911;
  for (let i = str.length - 1; i >= 0; i--) {
    let ch = str.charCodeAt(i);
    hash ^= ((hash << 5) + ch + (hash >> 2));
  }
  return (hash & 0x7FFFFFFF);
}

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
 * 根据path 修改Object中path对应的value
 */
function set(path, value, obj) {
  let _arr = path.split('.')
  const len = _arr.length - 1
  _arr.reduce((cur, key, index) => {
    if (!(cur[key]) && !(cur.hasOwnProperty(key)))
      throw `${key} 不存在!`
    if (index === len) {
      cur[key] = value
    }
    return cur[key]
  }, obj)
}

/**
 * 数据绑定
 */
function _bind(root, parent, paths, index, value) {
  let value_tb = value.slice(1).match(/([^0-9][\w. ]*)=?(.*)/)
  let _value = value_tb[1].replace(/(^\s*)|(\s*$)/g, "")
  let _default = value_tb[2].replace(/(^\s*)|(\s*$)/g, "") || ""
  let _arr = _value.split('.')
  let _len = _arr.length - 1
  _arr.reduce((cur, key, i) => {
    (i === _len) ? cur[key] = null: cur[key] = {}
    // Object.defineProperty(cur, key, {
    //   set: function (v) {
    //     console.log(v)
    //   },
    //   get: function () {}
    // })
    paths['_model'][key] = paths['_model'][key] || {}
    paths['_model'][key]['_env'] = parent._env
    // 用于其他组件设置该数据使用
    paths['_model'][key]['_bind_route'] = parent._env._route + '.' + index
    paths['_model'][key]['_bind_path'] = parent._env._path + '.' + index
    // 用于恢复原来的绑定key
    paths['_model'][key]['_bind_value'] = value
    if (i === _len) {
      paths['_model'][key]['_default'] = _default
    }
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
  parent[index] = _default
}

/**
 * 数据双向绑定 TODO
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
  let {
    _funcName,
    param
  } = _onCheck(value, paths)
  // _funcName && (parent._env._method = root['_on'][_funcName]) && (parent._env._methodName = _funcName, _param = param)
  _funcName && (parent._env._methodName = _funcName, parent._env._param = param)
}

/**
 * 函数绑定
 */
function _net(root, parent, paths, index, value) {
  let {
    _href,
    param
  } = _onCheckAPi(value, paths)
  parent._env._schema = 'wb'
  parent._env._href = _href
  parent._env._bind = param
}

/**
 * 处理函数绑定
 */
function _onCheck(value, paths) {
  let _funcName = value.slice(1)
  let param = (_funcName.match(/(.*)\(.+\)/g) || [_funcName + "()"])[0].match(/(?!,)[a-zA-Z0-9]+/g) || [];
  return {
    _funcName: param.shift(),
    param: param
  }
}

/**
 * 处理接口与数据绑定
 */
function _onCheckAPi(value, paths) {
  let _hrefApi = value.slice(1)
  let param_tb = _hrefApi.match(/(.*)\((.*)\)/) || (_hrefApi + "()").match(/(.*)\((.*)\)/)
  let param = param_tb[2].match(/(?!,)[a-zA-Z0-9]+/g) || [];
  return {
    _href: param_tb[1],
    param: param
  }
}


module.exports = {
  get: get,
  set: set,
  type: type,
  parse: parse,
  modify: modify,
  hash: hash,
}