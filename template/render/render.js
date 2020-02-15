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
    // console.log('renderData:', JSON.stringify(e))
    var env = e.currentTarget.dataset.env
    var tidx = e.currentTarget.dataset.tindex || e.target.dataset.tindex || e.mark.tindex
    var zidx = env._route || e.currentTarget.dataset.route || e.target.dataset.route || e.mark.route
    var list = {}
    for (var item in data) {
      list[zidx + '.' + item] = data[item]
    }
    this.setData(list)
  },
  getData(e, key) {
    var tidx = e.mark.tindex || e.currentTarget.dataset.tindex || e.target.dataset.tindex
    var zidx = e.mark.route || e.currentTarget.dataset.route || e.target.dataset.route
    return key ? this.data.list[tidx][key] : this.data.list[tidx]
  },
  createElement(e) {
    var index = e.mark.tindex || e.currentTarget.dataset.tindex || e.target.dataset.tindex
    var node = e.currentTarget.dataset.node || e.target.dataset.node || {}
    var elementNode = node[e.nodeType]
    if (Object.prototype.toString.call(node.element) == "[object String]") {
      elementNode = JSON.parse(elementNode)
    }
    let list = this.data.list || []
    if (!index) {
      list.splice(list.length - 1, 0, elementNode)
    } else {
      list.splice(index + 1, 0, elementNode)
    }
    this.setData({
      list: list
    })
    // 更新lru cache
    this.lru.set(this.data.path, list)
  },
  removeElement(e, index) {
    var tindex = e.mark.tindex || e.currentTarget.dataset.tindex || e.target.dataset.tindex
    let list = this.data.list || []
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
    var index = e.mark.tindex || e.currentTarget.dataset.tindex || e.target.dataset.tindex
    var node = e.currentTarget.dataset.node || e.target.dataset.node || {}
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
    var index = e.mark.tindex || e.currentTarget.dataset.tindex || e.target.dataset.tindex
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