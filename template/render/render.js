// template/render/render.js
import item from './item/item.js'
import form from './form/form.js'
import basic from './basic/basic.js'
// import tabbar from './tabbar/tabbar.js'
import interactive from './interactive/interactive.js'

export default Object.assign({
  render(ctx) {
    console.log(this)
  },
  checkAuth() {
    return new Promise((resolver, reject) => {
      wx.getSetting({
        success: (res) => {
          /*
           * res.authSetting = {
           *   "scope.userInfo": true,
           *   "scope.userLocation": true
           * }
           */
          var hasUserInfo = wx.getStorageSync('hasUserInfo') || false
          var authConfig = wx.getStorageSync('layout').authConfig || {
            authStatus: 1,
            title: "微信授权",
            content: "请确是否授权？"
          }
          if (authConfig.authStatus == 2 || !res.authSetting['scope.userInfo'] || !hasUserInfo) {
            resolver({
              authConfig: authConfig
            })
          }
        },
        fail(e) {
          reject(e)
        }
      })
    }).catch((e) => {
      console.log(e)
    });
  },
  renderData(e, data) {
    var env = e.currentTarget.dataset.env || e.target.dataset.env
    var tindex = env._index || e.currentTarget.dataset.tindex || e.target.dataset.tindex
    var route = env._route
    var list = {}
    for (var item in data) {
      list[route + '.' + item] = data[item]
    }
    this.setData(list)
  },
  getData(e, key) {
    var env = e.currentTarget.dataset.env || e.target.dataset.env
    var tindex = env._index || e.currentTarget.dataset.tindex || e.target.dataset.tindex
    var route = env._route
    var data = this.parser.get(env._path, this.data)
    return key ? data[key] : data
  },
  createElement(e) {
    var env = e.currentTarget.dataset.env || e.target.dataset.env
    var tindex = env._index ||e.currentTarget.dataset.tindex || e.target.dataset.tindex
    var node = e.currentTarget.dataset.node || e.target.dataset.node || {}
    var elementNode = node[e.nodeType]
    if (Object.prototype.toString.call(node.element) == "[object String]") {
      elementNode = JSON.parse(elementNode)
    }
    var list = this.data.list || []
    if (!tindex) {
      list.splice(list.length - 1, 0, elementNode)
    } else {
      list.splice(tindex + 1, 0, elementNode)
    }
    this.setData({
      list: list
    })
    // 更新lru cache
    this.lru.set(this.data.path, list)
  },
  removeElement(e, index) {
    var env = e.currentTarget.dataset.env || e.target.dataset.env
    var tindex = e._index || e.currentTarget.dataset.tindex || e.target.dataset.tindex
    var list = this.data.list || []
    if (index) {
      list.splice(index, 1)
    } else {
      list.splice(tindex, 1)
    }
    this.setData({
      list: list
    })
    // 更新lru cache
    this.lru.set(this.data.path, list)
  },
  beforeClick(e) {
    var env = e.currentTarget.dataset.env || e.target.dataset.env
    var tindex = e._index || e.currentTarget.dataset.tindex || e.target.dataset.tindex
    var node = e.currentTarget.dataset.node || e.target.dataset.node || {}
    if (env._methodName && this.data._on[env._methodName]) {
      this.data._on[env._methodName](this, e)
    }
    var elementNode = node.b_n
    if (Object.prototype.toString.call(elementNode) == "[object String]") {
      elementNode = JSON.parse(elementNode)
    }
    if (elementNode) {
      e.nodeType = 'b_n'
      this.createElement(e)
    }
  },
  afterClick(e) {
    var env = e.currentTarget.dataset.env || e.target.dataset.env
    var tindex = e._index || e.currentTarget.dataset.tindex || e.target.dataset.tindex
    var node = e.currentTarget.dataset.node || e.target.dataset.node || {}
    var elementNode = node.a_n
    if (Object.prototype.toString.call(elementNode) == "[object String]") {
      elementNode = JSON.parse(elementNode)
    }
    if (elementNode) {
      e.nodeType = 'a_n'
      this.createElement(e)
    }
  }
}, interactive, basic, item, form)