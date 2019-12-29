/**
 * diff 函数，比较与缓存中的数据是否相同，返回差异
 */
import diff from '../libs/diff.js'
/**
 * lru map 缓存最近的页面数据
 */
const LRUMap = require('../libs/lru/lru.js').LRUMap
const lru = new LRUMap()

function clone(origin) {
  let originProto = Object.getPrototypeOf(origin);
  return Object.assign(Object.create(originProto), origin);
}

const getMockData = function(path, args, body) {
  //返回promise 对象
  return new Promise((resolver, reject) => {
    var res = require("../mock/" + path)
    res.path = path
    var originData = lru.get(path)
    res.diff = 0
    var diffD = diff(originData, res) || {}
    console.log(diffD)
    res.diff = 1
    lru.set(path, clone(res))
    if (0 != Object.keys(diffD).length) {
      resolver(diffD)
    }
  }).catch((e) => {
    console.log(e)
  });
}

module.exports = {
  getMockData: getMockData
}