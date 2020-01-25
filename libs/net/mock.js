(function(g, f) {
  const e = typeof exports == 'object' ? exports : typeof g == 'object' ? g : {};
  f(e);
  if (typeof define == 'function' && define.amd) {
    define('mock', e);
  }
})(this, function(exports) {
  const diff = require('../diff.js').default
  const parser = require('../parser.js').default

  function Mock(ctx, root) {
    this.ctx = ctx;
    this.root = root;
  }

  exports.Mock = Mock;

  function modify(path, value, obj) {
    const arr = path.split('.')
    const len = arr.length - 1
    arr.reduce((cur, key, index) => {
      if (!(cur[key]))
        throw `${key} 不存在!`
      if (index === len) {
        cur[key] = value
      }
      return cur[key]
    }, obj)
  }

  Mock.prototype.get = function(path, args, body) {
    return new Promise((resolver, reject) => {
      this.ctx.setData(this.ctx.lru.get(path) || {})
      var res = require(this.root + path)
      res.path = path
      var parRes = parser(res.list) || []
      for (let key in parRes) {
        modify(key, require(this.root + parRes[key]), res.list)
      }
      var originData = this.ctx.getPage()
      var delta = diff(originData, res) || {}
      console.log(delta)
      this.ctx.lru.set(path, res)
      if (0 != Object.keys(delta).length) {
        resolver(delta)
      }
    }).catch((e) => {
      console.log(e)
    });
  }

  Mock.prototype.clone = function(origin) {
    let originProto = Object.getPrototypeOf(origin);
    return Object.assign(Object.create(originProto), origin);
  }
});