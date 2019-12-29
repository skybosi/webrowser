(function(g, f) {
  const e = typeof exports == 'object' ? exports : typeof g == 'object' ? g : {};
  f(e);
  if (typeof define == 'function' && define.amd) {
    define('mock', e);
  }
})(this, function(exports) {
  const diff = require('../diff.js').default

  function Mock(ctx, root) {
    this.ctx = ctx;
    this.root = root;
  }

  exports.Mock = Mock;

  Mock.prototype.get = function(path, args, body) {
    return new Promise((resolver, reject) => {
      var res = require(this.root + path)
      res.path = path
      var originData = this.ctx.lru.get(path)
      var diffD = diff(originData, res) || {}
      console.log(diffD)
      this.ctx.lru.set(path, res)
      if (0 != Object.keys(diffD).length) {
        resolver(diffD)
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