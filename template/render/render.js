// template/render/render.js
import item from './item/item.js'
import form from './form/form.js'
import shower from './shower/shower.js'
import button from './button/button.js'
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
    var tidx = e.currentTarget.dataset.tindex || e.target.dataset.tindex || e.mark.tindex
    var zidx = e.currentTarget.dataset.zindex || e.target.dataset.zindex || e.mark.zindex
    var list = {}
    var index = "list"
    if (undefined != zidx && '' != zidx) {
      var zidx2 = zidx.replace(/\.?(\d)/g, '[$1]')
      index = index + zidx.replace(/\.?(\d)/g, '[$1]') + ".list[" + tidx + "]."
    }else{
      index = index + '[' + tidx + "]."
    }
    for (var item in data) {
      list[index + item] = data[item]
    }
    this.setData(list)
  },
  getData(e, key) {
    var tidx = e.mark.tindex || e.currentTarget.dataset.tindex || e.target.dataset.tindex
    var zidx = e.mark.zindex || e.currentTarget.dataset.zindex || e.target.dataset.zindex
    return this.data.list[tidx][key]
  }
}, interactive, shower, item, form, button)