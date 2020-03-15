const app = getApp();
import diff from '../../libs/diff.js'
import parser from '../../libs/parser.js'
import net from '../../libs/net/net.js'
import render from '../../template/render/render.js'
const LRUMap = require('../../libs/lru/lru.js').LRUMap
const lru = new LRUMap()
const Mock = require('../../libs/net/mock.js').Mock
const NAV = {
  nav: {
    icon1: 'back',
    text1: '返回'
  }
}
app.lru = lru

let originPage = Page

export default function(context = {}) {
  /**
   * merge 渲染层的功能到Page中
   */
  Object.assign(context, render, {
    net: net,
    lru: lru,
    diff: diff,
    parser: parser
  })
  /**
   * 页面加载函数重写
   */
  let originOnLoad = context.onLoad
  context.onLoad = function(options) {
    const that = this
    const mock = new Mock(that, "../../mock/")
    Object.assign(that, {
      mock: mock
    })
    that.app = app
    that.data.query = options.query
    that.data.path = options.path || "/index"
    that.data._id = that.parser.hash(that.data.path + that.data.query)
    try {
      that.data["_ctx"] = JSON.parse(options.ctx)
      that.data._eventId = that.data._ctx._id + ">" + that.data._id
    } catch (e) {
      that.data["_ctx"] = null
      that.data._eventId = ".>" + that.data._id
    }
    // 网络变化后，缓存将不会记录命中次数
    that.app.event.on("net_status_type", that, function(e) {
      that.lru.reset()
      wx.showToast({
        title: '网络似乎不太顺畅',
      })
    })
    that.app.event.on("net_status_change", that, function(e) {
      that.lru.reset()
      wx.showToast({
        title: '网络似乎不太顺畅',
      })
    })
    originOnLoad && originOnLoad.call(that, options)
  }
  /**
   * 触摸滑动事件后
   */
  let originonPageEvent = context.onPageEvent
  context.onPageEvent = function(e) {
    const that = this
    var env = that.getEnv(e)
    switch (e.direction) {
      case 'leftedge':
      case 'rightedge':
        wx.navigateBack({
          delta: -1
        })
        break
      case 'left':
      case 'right':
        break;
      case 'down':
        that.request(env.enablePullDownRefresh._href || that.data.path, "", "", true).then(res => {
          that._setData(res)
        })
        break
      default:
        break
    }
    originonPageEvent && originonPageEvent.call(that, e)
  }

  /**
   * 页面滚动事件
   */
  let originonPageScroll = context.onPageScroll
  context.onPageScroll = function(e) {
    const that = this
    let scrollTop = e.scrollTop
    let pageStats = that.data.pageStats;
    pageStats.scrollTop = e.scrollTop
    that._setData({
      pageStats
    })
    that.data.scrollTopArray[that.data.PageCur] = scrollTop;
    originonPageScroll && originonPageScroll.call(that, e)
  }

  /**
   * 页面触底事件
   */
  let originonReachBottom = context.onReachBottom
  context.onReachBottom = function() {
    const that = this
    if (!that.data.enablePullUpRefresh.isover ||
      that.data.enablePullUpRefresh.isover != 1) {
      that.data.enablePullUpRefresh._href && that.request(that.data.enablePullUpRefresh._href, "", "", true).then(res => {
        var total = res.total
        var offset = (that.data.list || []).length
        if ((res.list || []).length + offset >= total) {
          res.enablePullUpRefresh.isover = 1
        } else {
          res.enablePullUpRefresh.isover = 2
        }
        that._setData(res, true)
      }).catch((e) => {})
    }
    originonReachBottom && originonReachBottom.call(that)
  }
  context.getPage = function() {
    return this.lru.get(this.data.path) || {}
  }
  return Page({
    data: Object.assign(context.data, {
      // authConfig: authConfig,
      pageStats: {
        maxScrollTop: 0,
        scrollTop: 0,
        reachBottom: false,
        Custom: app.globalData.Custom,
        CustomBar: app.globalData.CustomBar,
        StatusBar: app.globalData.StatusBar,
        ScreenWidth: app.globalData.DiviceInfo.screenWidth,
        ScreenHeight: app.globalData.DiviceInfo.screenHeight,
      },
      scrollTopArray: {},
      Custom: app.globalData.Custom,
      CustomBar: app.globalData.CustomBar,
      StatusBar: app.globalData.StatusBar,
      ScreenWidth: app.globalData.DiviceInfo.screenWidth,
      ScreenHeight: app.globalData.DiviceInfo.screenHeight,
    }),
    props: {
      pureDataPatten: /^_/
    },
    _setData(origin, append) {
      for (let key in origin) {
        if (key.match(this.props.pureDataPatten) ||
          'methods' == key) {
          this.data[key] = origin[key], delete(origin[key])
        }
      }
      if (append && origin.list) {
        origin.list = this.data.list.concat(origin.list)
      }
      this.setData(origin)
    },
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {
      return {
        title: this.data.shareTitle,
        imageUrl: shareImage,
        path: sharePath
      }
    },
    clickNav(e) {
      let curTime = e.timeStamp;
      let lastTime = this.lastTapDiffTime;
      this.lastTapDiffTime = curTime;
      //两次点击间隔小于300ms, 认为是双击
      let diff = curTime - lastTime;
      if (diff < 300) {
        wx.pageScrollTo({
          scrollTop: 0
        })
      }
    },
    longPressNav(e) {
      var that = this
      var mode = ""
      if (1 == app.DEBUG) {
        mode = "网络请求模式"
      } else {
        mode = "demo模式"
      }
      wx.showModal({
        title: '切换模式',
        content: '将切换到' + mode,
        success: res => {
          app.DEBUG = (1 == app.DEBUG ? 0 : 1)
          wx.setStorage({
            key: 'debug',
            data: app.DEBUG,
          })
          that.lru.clear()
          wx.reLaunch({
            url: '/pages/index/index',
          })
        }
      })
    },
    NavChange(e) {
      var that = this
      var env = that.getEnv(e)
      that.data.path = env._href
      env._href = ""
      that.beforeClick(e)
      // 处理前一个页面的生命周期
      // that.getCurrComponent().onHide()
      // that.getCurrComponent().onUnload()
      var id = e.currentTarget.dataset.id
      var index = e.currentTarget.dataset.index
      var query = e.currentTarget.dataset.query
      that.data.query = query
      that.request(that.data.path, query, null, false).then(res => {
        res.PageCur = e.currentTarget.dataset.cur
        that._setData(res)
        // 处理现在一个页面的生命周期
        // that.getCurrComponent().onLoad()
        // that.getCurrComponent().onShow()
        // that.getCurrComponent().onReady()
        // wx.pageScrollTo 会导致触发 onPageScroll，出现屏幕scrollTop被改
        wx.pageScrollTo({
          duration: 0,
          scrollTop: that.data.scrollTopArray[e.currentTarget.dataset.cur] || 0,
          complete() {
            that.data.isNavChange = false
          }
        })
      }).catch((e) => {})
    },
    request(path, query, body, forse) {
      var that = this
      return new Promise((resolver, reject) => {
        if (app.DEBUG) {
          that.mock.get(path, query).then(res => {
            resolver(!res ? NAV : res)
          }).catch((e) => {
            reject(res)
          });
        }
        // 优先使用缓存
        var cache = !forse ? that.lru.get(path) : null
        if (cache) {
          console.log(path, "use cache")
          resolver(cache)
        } else {
          // 发起网络请求
          that.net.request(path, query, body).then(res => {
            res = res.data
            var parRes = that.parser.parse(res) || []
            that.lru.set(that.data.path, res)
            // goto inner page
            var goto = parRes['_']['goto'] || []
            if (goto.length !== 0) {
              var all = goto.map(item => {
                return that.net.request(item._href, null)
              })
              Promise.all(all).then(r => {
                r.map((sub, i) => {
                  sub = sub.data || {}
                  that.parser.modify(goto[i]._path, goto[i]._route, sub, res)
                })
                // 控制类型变量不继承上一页面page
                res.nav = res.nav || {}
                res.enablePullDownRefresh = res.enablePullDownRefresh || false
                res.enablePullUpRefresh = res.enablePullUpRefresh || false
                res.hideNavigation = res.hideNavigation || false
                that.lru.set(that.data.path, res)
                resolver(!res ? NAV : res)
              }).catch(e => {})
            } else {
              // 控制类型变量不继承上一页面page
              res.nav = res.nav || {}
              res.enablePullDownRefresh = res.enablePullDownRefresh || false
              res.enablePullUpRefresh = res.enablePullUpRefresh || false
              res.hideNavigation = res.hideNavigation || false
              that.lru.set(that.data.path, res)
              // var originData = that.getPage()
              // var delta = diff(res, originData) || {}
              // console.log(delta)
              // if (0 != Object.keys(delta).length) {
              //   resolver(delta)
              // }
              resolver((!res || !res.list) ? NAV : res)
            }
          }).catch((e) => {
            reject(e)
          })
        }
      }).catch((e) => {});
    },
    ...context
  });
}