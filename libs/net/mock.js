(function(g, f) {
  const e = typeof exports == 'object' ? exports : typeof g == 'object' ? g : {};
  f(e);
  if (typeof define == 'function' && define.amd) {
    define('mock', e);
  }
})(this, function(exports) {
  const diff = require('../diff.js').default
  const parser = require('../parser.js')

  function Mock(ctx, root) {
    this.ctx = ctx;
    this.root = root;
  }

  exports.Mock = Mock;

  Mock.prototype.get = function(path, args, body) {
    return new Promise((resolver, reject) => {
      this.ctx.setData(this.ctx.lru.get(path) || {})
      var res = require(this.root + path) || {}
      res.path = path
      var parRes = parser.parse(res) || []
      // goto inner page
      var goto = parRes['_']['goto'] || []
      for (let key in goto) {
        parser.modify(key, goto[key]._route, require(this.root + goto[key]._data) || {}, res)
      }
      // 控制类型变量不继承上一页面page
      res.nav = res.nav || {}
      res.enablePullDownRefresh = res.enablePullDownRefresh || false
      res.enablePullUpRefresh = res.enablePullUpRefresh || false
      res.hideNavigation = res.hideNavigation || false
      resolver(res)
      // var originData = this.ctx.getPage()
      // var delta = diff(originData, res) || {}
      // // console.log(delta)
      // this.ctx.lru.set(path, res)
      // if (0 != Object.keys(delta).length) {
      //   resolver(delta)
      // }
    }).catch((e) => {
      console.log(e)
    });
  }

  Mock.prototype.clone = function(origin) {
    let originProto = Object.getPrototypeOf(origin);
    return Object.assign(Object.create(originProto), origin);
  }
});