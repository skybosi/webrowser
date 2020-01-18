const MAP_KEY = {
  goto: 1
}
const ARRAYTYPE = '[object Array]'
const OBJECTTYPE = '[object Object]'
const FUNCTIONTYPE = '[object Function]'

export default function parser(data) {
  console.log("checkGoto", data)
  let paths = []
  paths['_'] = []
  var curpath = ""
  for (let index in data) {
    console.log(index, data[index]);
    _deepCheckgoto(index, data[index], curpath, paths)
    curpath = ""
  }
  // for (let index in paths) {
  //   console.log(index, paths[index]);
  // }
  return paths["_"]
}

function _deepCheckgoto(index, data, parent, paths) {
  const dataType = type(data)
  let curpath = parent
  if (parent) {
    curpath = curpath + "." + index
    paths[parent + "." + index] = 1
  } else {
    curpath = index
    // paths[curpath] = data
  }
  if (dataType == OBJECTTYPE || dataType == ARRAYTYPE) {
    for (let key in data) {
      if (data[key] !== undefined) {
        _deepCheckgoto(key, data[key], curpath, paths)
      }
    }
  } else {
    // delete paths[parent]
    curpath = parent
  }
  if (MAP_KEY[index]) {
    paths["_"][curpath] = data
  }
}

function type(obj) {
  return Object.prototype.toString.call(obj)
}